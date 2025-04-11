import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const endShiftService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cashierId = req.user?.id;
    const { endCash } = req.body;

    if (!endCash || isNaN(endCash)) {
      return res
        .status(400)
        .json({ message: "endCash is required and must be a number" });
    }

    const activeShift = await prisma.shift.findFirst({
      where: {
        cashierId,
        endedAt: null,
      },
    });

    if (!activeShift) {
      return res.status(404).json({ message: "No active shift found" });
    }

    const transactions = await prisma.transaction.findMany({
      where: {
        cashierId,
        createdAt: {
          gte: activeShift.startedAt,
        },
      },
    });

    const totalTransaction = transactions.reduce(
      (acc, t) => acc + t.totalPrice,
      0
    );
    const totalCash = transactions
      .filter((t) => t.paymentMethod === "CASH")
      .reduce((acc, t) => acc + t.totalPrice, 0);

    const totalDebit = transactions
      .filter((t) => t.paymentMethod === "DEBIT")
      .reduce((acc, t) => acc + t.totalPrice, 0);

    const endedShift = await prisma.shift.update({
      where: { id: activeShift.id },
      data: {
        endCash: parseInt(endCash),
        endedAt: new Date(),
        totalTransaction,
        totalCash,
        totalDebit,
        isActive: false,
      },
    });

    res.status(200).json({
      message: "Shift ended successfully",
      data: endedShift,
    });
  } catch (err) {
    console.error("End shift error:", err);
    next(err);
  }
};
