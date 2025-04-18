import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";

export const getCashFlowPerShiftService = async (
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

    const shiftCashFlow = await prisma.shift.findMany({
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

    res.status(200).send(shiftCashFlow);
  } catch (err) {
    next(err);
    res.status(500).send("Error fetching cash flow per shift report");
  }
};
