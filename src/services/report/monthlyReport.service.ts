import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import dayjs from "dayjs";

export const monthlyReportService = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const year = parseInt(req.query.year as string);
      const month = parseInt(req.query.month as string);
  
      if (!year || !month || isNaN(year) || isNaN(month)) {
        res.status(400).send({ message: "Invalid 'year' or 'month' parameter" });
        return;
      }
  
      const start = dayjs(`${year}-${month}-01`).startOf("month").toDate();
      const end = dayjs(`${year}-${month}-01`).endOf("month").toDate();
  
      const transactions = await prisma.transaction.findMany({
        where: {
          createdAt: {
            gte: start,
            lte: end,
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
        year,
        month,
        summary: {
          totalTransaction: transactions.length,
          totalIncome,
          totalCash,
          totalDebit,
        },
      });
    } catch (error) {
      console.error("Error in monthly report:", error);
      next(error);
    }
  };
  