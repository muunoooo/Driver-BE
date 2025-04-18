import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import dayjs from "dayjs";

export const dailyReportService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { date, page = 1, limit = 10 } = req.query;

    if (!date || typeof date !== "string") {
      res.status(400).send({ message: "Invalid or missing 'date' parameter" });
      return;
    }

    const startOfDay = dayjs(date).startOf("day").toDate();
    const endOfDay = dayjs(date).endOf("day").toDate();

    // ✅ Get total count of transactions to calculate total pages
    const totalTransactions = await prisma.transaction.count({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    // Calculate the number of pages
    const totalPages = Math.ceil(totalTransactions / parseInt(limit as string));

    // ✅ Get transactions with pagination
    const transactions = await prisma.transaction.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      skip: (parseInt(page as string) - 1) * parseInt(limit as string),
      take: parseInt(limit as string),
      include: {
        items: {
          include: {
            product: true,
          },
        },
        cashier: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    const totalIncome = transactions.reduce(
      (acc, trx) => acc + trx.totalPrice,
      0
    );
    const totalCash = transactions
      .filter((trx) => trx.paymentMethod === "CASH")
      .reduce((acc, trx) => acc + trx.totalPrice, 0);
    const totalDebit = transactions
      .filter((trx) => trx.paymentMethod === "DEBIT")
      .reduce((acc, trx) => acc + trx.totalPrice, 0);

    // ✅ Per item sales summary
    const itemSummary: Record<string, { name: string; totalQty: number }> = {};

    transactions.forEach((trx) => {
      trx.items.forEach((item) => {
        const productId = item.product.id;
        if (!itemSummary[productId]) {
          itemSummary[productId] = {
            name: item.product.name,
            totalQty: item.quantity,
          };
        } else {
          itemSummary[productId].totalQty += item.quantity;
        }
      });
    });

    // ✅ Get all shifts for the day
    const shifts = await prisma.shift.findMany({
      where: {
        startedAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        cashier: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    const formattedShifts = shifts.map((shift) => ({
      cashier: shift.cashier,
      startedAt: shift.startedAt,
      endedAt: shift.endedAt,
      startCash: shift.startCash,
      endCash: shift.endCash,
      totalTransaction: shift.totalTransaction,
      totalCash: shift.totalCash,
      totalDebit: shift.totalDebit,
    }));

    res.status(200).send({
      date,
      summary: {
        totalTransaction: totalTransactions,
        totalIncome,
        totalCash,
        totalDebit,
      },
      perItemSummary: Object.values(itemSummary),
      transactions,
      shifts: formattedShifts,
      pagination: {
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        totalPages,
        totalTransactions,
      },
    });
  } catch (error) {
    console.error("Error in daily report:", error);
    next(error);
  }
};
