import { Response, NextFunction } from "express";
import prisma from "../../prisma";
import { AuthenticatedRequest } from "../../types";

export const startShiftService = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const cashierId = req.user?.id;
    const { startCash } = req.body;

    if (startCash === undefined || isNaN(startCash)) {
      return res
        .status(400)
        .json({ message: "startCash is required and must be a number" });
    }

    const existingShift = await prisma.shift.findFirst({
      where: {
        cashierId,
        endedAt: null,
        isActive: true,
      },
    });

    if (existingShift) {
      return res
        .status(400)
        .json({ message: "You already have an active shift" });
    }

    const newShift = await prisma.shift.create({
      data: {
        cashierId,
        startCash: parseInt(startCash),
        isActive: true,
      },
    });

    res.status(201).json({
      message: "Shift started successfully",
      data: newShift,
    });
  } catch (error) {
    console.error("Start shift error:", error);
    next(error);
  }
};
