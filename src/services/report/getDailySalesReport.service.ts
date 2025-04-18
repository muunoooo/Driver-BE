import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";

export const getDailySalesServcice = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
  try {
    const { date } = req.query;

    if (!date) {
      res.status(400).send({ message: "Date parameter is required" });
      return;
    }

    const dailySales = await prisma.transaction.aggregate({
      _sum: {
        totalPrice: true,
      },
      where: {
        createdAt: {
          gte: new Date(`${date}T00:00:00`),
          lt: new Date(`${date}T23:59:59`),
        },
      },
    });

    res.status(200).send(dailySales);
  } catch (err) {
    next(err);
    res.status(500).send("Error fetching daily sales report" );
  }
};
