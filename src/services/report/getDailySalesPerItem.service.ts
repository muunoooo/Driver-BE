import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";

export const getDailySalesPerItemService = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
  try {
    const { date } = req.query;

    if (!date) {
      res.status(400).send({ message: "Date parameter is required" });
      return;
    }

    const salesPerItem = await prisma.transactionItem.groupBy({
      by: ['productId'],
      _sum: {
        subtotal: true,
      },
      where: {
        transaction: {
          createdAt: {
            gte: new Date(`${date}T00:00:00`),
            lt: new Date(`${date}T23:59:59`),
          },
        },
      },
    });

    res.status(200).send(salesPerItem);
  } catch (err) {
    next(err);
    res.status(500).send("Error fetching daily sales per item report" );
  }
};
