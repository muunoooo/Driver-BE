import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";

export const getSalesPerShiftService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { date } = req.query;

    if (!date) {
      res.status(400).send({ message: "Date parameter is required" });
      return;
    }

    const shifts = await prisma.shift.findMany({
      where: {
        startedAt: {
          gte: new Date(`${date}T00:00:00`),
          lt: new Date(`${date}T23:59:59`),
        },
      },
      include: {
        transactions: true,
      },
    });

    res.status(200).send(shifts);
  } catch (err) {
    next(err);
    res.status(500).send("Error fetching sales per shift report");
  }
};
