import { Response, NextFunction } from "express";
import prisma from "../../prisma";
import { AuthenticatedRequest } from "../../types";

export const createTransactionService = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const cashierId = req.user?.id;

    const { paymentMethod, cashPaid, debitCardNo, items } = req.body;

    if (!paymentMethod || !["CASH", "DEBIT"].includes(paymentMethod)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing payment method" });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ message: "Transaction items are required" });
    }


    const activeShift = await prisma.shift.findFirst({
      where: { cashierId, endedAt: null },
    });

    if (!activeShift) {
      return res.status(400).json({ message: "No active shift found" });
    }


    const productIds = items.map((item: any) => item.productId);
    const products = await prisma.product.findMany({
      where: { id: { in: productIds } },
    });


    let totalPrice = 0;
    const transactionItems = items.map((item: any) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) throw new Error(`Product not found: ${item.productId}`);
      const subtotal = product.price * item.quantity;
      totalPrice += subtotal;
      return {
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
        subtotal,
      };
    });


    let change = 0;
    if (paymentMethod === "CASH") {
      if (typeof cashPaid !== "number" || cashPaid < totalPrice) {
        return res.status(400).json({ message: "Insufficient cash paid" });
      }
      change = cashPaid - totalPrice;
    } else if (paymentMethod === "DEBIT" && !debitCardNo) {
      return res.status(400).json({ message: "Debit card number is required" });
    }


    const transaction = await prisma.transaction.create({
      data: {
        cashierId,
        shiftId: activeShift.id,
        totalPrice,
        paymentMethod,
        cashPaid: paymentMethod === "CASH" ? cashPaid : null,
        debitCardNo: paymentMethod === "DEBIT" ? debitCardNo : null,
        change: paymentMethod === "CASH" ? change : null,
        items: {
          create: transactionItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.subtotal,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    res.status(201).json({
      message: "Transaction created successfully",
      data: transaction,
    });
  } catch (error) {
    console.error("Create transaction error:", error);
    next(error);
  }
};
