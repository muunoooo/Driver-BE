import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";
import { cloudinaryUpload } from "../../utils/cloudinary";

export const updateUserService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const file = req.file;

    if (!name && !email && !password && !file) {
      res.status(400).json({
        message: "At least one field (name, email, password, or avatar) is required",
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
      avatar: string;
    }> = {};

    if (name) updatedData.name = name;
    if (email) updatedData.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    let avatarUploadWarning: string | undefined;
    if (file) {
      try {
        const uploaded = await cloudinaryUpload(file, "avatars");
        updatedData.avatar = uploaded.secure_url;
      } catch (uploadErr) {
        console.warn("⚠️ Avatar upload failed:", uploadErr);
        avatarUploadWarning = "Avatar upload failed. Profile updated without new avatar.";
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json({
      message: "User updated successfully",
      warning: avatarUploadWarning,
      data: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        avatar: updatedUser.avatar,
      },
    });
  } catch (err) {
    console.error("Error updating user:", err);
    next(err);
  }
};
