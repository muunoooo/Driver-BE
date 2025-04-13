import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";

export const updateUserService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      res.status(400).json({
        message: "At least one field (name, email, or password) is required",
      });
      return;
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const updatedData: Partial<{
      name: string;
      email: string;
      password: string;
    }> = {};

    if (name) {
      updatedData.name = name;
    }

    if (email) {
      updatedData.email = email;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json({
      message: `User ${name} updated successfully`,
      data: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
      },
    });
  } catch (err) {
    console.error("Error updating user:", err);
    next(err);
  }
};
