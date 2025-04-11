import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const getProductByIdService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const product = await prisma.product.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json({
      message: "Product retrieved successfully",
      data: product,
    });
  } catch (err) {
    console.error("Error getting product by ID:", err);
    next(err);
  }
};
