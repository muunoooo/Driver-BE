import { Response, NextFunction } from "express";
import prisma from "../../prisma";
import { AuthenticatedRequest } from "../../types";

export const getShiftService = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const cashierId = req.user?.id;

    if (!cashierId) {
      return res.status(400).json({ message: "No cashier ID found" });
    }

    const activeShift = await prisma.shift.findFirst({
      where: {
        cashierId,
        endedAt: null,
      },
    });

    if (!activeShift) {
      return res.status(400).json({ message: "No active shift found" });
    }

    return res.status(200).json({
      message: "Active shift found",
      data: activeShift,
    });
  } catch (error) {
    console.error("Get active shift error:", error);
    next(error);
  }
};
