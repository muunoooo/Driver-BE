import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "../types";
import prisma from "../prisma";

export const checkActiveShift = async (
  req: Request & { user?: JwtPayload },
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const cashierId = req.user?.id; 
    if (!cashierId) {
        res.status(400).json({ message: "No active user found" });
      return 
    }

    const activeShift = await prisma.shift.findFirst({
      where: {
        cashierId,
        endedAt: null, 
        isActive: true,  
      },
    });

    if (!activeShift) {
        res.status(400).json({ message: "No active shift found." });
      return 
    }

 
    next();
  } catch (error) {
    console.error("Error checking active shift:", error);
    res.status(500).json({ message: "Server error, please try again." });
  }
};
