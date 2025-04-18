import { Response, NextFunction } from "express";
import prisma from "../../prisma";
import { AuthenticatedRequest } from "../../types";

export const checkActiveShiftService = async (
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
        isActive: true,
      },
    });

    if (activeShift) {
      return res.status(200).json({
        hasActiveShift: true,
        data: activeShift,
      });
    } else {
      return res.status(200).json({
        hasActiveShift: false,
      });
    }
  } catch (error) {
    console.error("Check active shift error:", error);
    next(error);
  }
};
