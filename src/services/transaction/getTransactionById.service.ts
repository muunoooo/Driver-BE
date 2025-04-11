import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const getTransactionByIdService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const transaction = await prisma.transaction.findUnique({
      where: { id },
      select: {
        id: true,
        totalPrice: true,
        paymentMethod: true,
        cashPaid: true,
        debitCardNo: true,
        change: true,
        createdAt: true,
        cashier: {
          select: {
            id: true,
            name: true, 
          },
        },
        shift: {
          select: {
            id: true,
            startedAt: true,
            endedAt: true,
          },
        },
        items: {
          select: {
            id: true,
            quantity: true,
            price: true,
            subtotal: true,
            product: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!transaction) {
      res.status(404).json({ message: "Transaction not found" });
      return;
    }

    res.status(200).json({
      message: "Transaction retrieved successfully",
      data: {
        ...transaction,
        items: transaction.items.map((item) => ({
          id: item.id,
          productId: item.product.id,
          productName: item.product.name,
          quantity: item.quantity,
          price: item.price,
          subtotal: item.subtotal,
        })),
      },
    });
  } catch (error) {
    console.error("Error getting transaction by ID:", error);
    next(error);
  }
};
