import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const getUserByIdService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    console.error("Error getting user by ID:", err);
    next(err);
  }
};
