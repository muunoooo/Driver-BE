import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const softDeleteUserService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user || user.isDeleted) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    await prisma.user.update({
      where: { id },
      data: {
        isDeleted: true,
        email: `deleted+${id}@email.com`,
      },
    });

    res.status(200).json({
      message: `User ${user.name} soft-deleted successfully`,
    });
  } catch (err) {
    console.error("Error soft-deleting user:", err);
    next(err);
  }
};
