import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import dayjs from "dayjs";

export const dailyReportService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { date } = req.query;

    if (!date || typeof date !== "string") {
      res.status(400).send({ message: "Invalid or missing 'date' parameter" });
      return;
    }

    const startOfDay = dayjs(date).startOf("day").toDate();
    const endOfDay = dayjs(date).endOf("day").toDate();

    const transactions = await prisma.transaction.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
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

    const totalIncome = transactions.reduce((acc, trx) => acc + trx.totalPrice, 0);
    const totalCash = transactions
      .filter((trx) => trx.paymentMethod === "CASH")
      .reduce((acc, trx) => acc + trx.totalPrice, 0);
    const totalDebit = transactions
      .filter((trx) => trx.paymentMethod === "DEBIT")
      .reduce((acc, trx) => acc + trx.totalPrice, 0);

    res.status(200).send({
      date,
      summary: {
        totalTransaction: transactions.length,
        totalIncome,
        totalCash,
        totalDebit,
      },
      transactions,
    });
  } catch (error) {
    console.error("Error in daily report:", error);
    next(error);
  }
};
