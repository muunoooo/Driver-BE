import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import dayjs from "dayjs";

export const yearlyReportService = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const year = parseInt(req.query.year as string);
  
      if (!year || isNaN(year)) {
        res.status(400).send({ message: "Invalid 'year' parameter" });
        return;
      }
  
      const start = dayjs(`${year}-01-01`).startOf("year").toDate();
      const end = dayjs(`${year}-12-31`).endOf("year").toDate();
  
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
        summary: {
          totalTransaction: transactions.length,
          totalIncome,
          totalCash,
          totalDebit,
        },
      });
    } catch (error) {
      console.error("Error in yearly report:", error);
      next(error);
    }
  };
  