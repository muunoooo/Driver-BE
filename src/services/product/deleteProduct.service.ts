import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const softDeleteProductService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct || existingProduct.isDeleted) {
      res.status(404).json({ message: "Product not found or already deleted" });
      return;
    }

    const deletedProduct = await prisma.product.update({
      where: { id },
      data: {
        isDeleted: true,
      },
    });

    res.status(200).json({
      message: "Product deleted (soft) successfully",
      data: deletedProduct,
    });
  } catch (err) {
    console.error("Error soft deleting product:", err);
    next(err);
  }
};
