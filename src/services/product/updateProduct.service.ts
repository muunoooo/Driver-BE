import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import { cloudinaryUpload, cloudinaryRemove } from "../../utils/cloudinary";

export const updateProductService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, stock, category } = req.body;
    const file = req.file;

    if (!name && !price && !stock && !category && !file) {
      res.status(400).json({
        message: "At least one field (name, price, stock, category, or image) is required",
      });
      return;
    }

    const existingProduct = await prisma.product.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!existingProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    const updatedData: Partial<{
      name: string;
      price: number;
      stock: number;
      category: "MAKANAN" | "MINUMAN";
      imageUrl: string;
    }> = {};

    if (name) updatedData.name = name;
    if (price) updatedData.price = parseInt(price);
    if (stock) updatedData.stock = parseInt(stock);
    if (category) {
      if (category !== "MAKANAN" && category !== "MINUMAN") {
        res
          .status(400)
          .json({ message: "Category must be either 'MAKANAN' or 'MINUMAN'" });
        return;
      }
      updatedData.category = category;
    }

    if (file) {
      try {
        const uploaded = await cloudinaryUpload(file, "products");
        updatedData.imageUrl = uploaded.secure_url;

        if (existingProduct.imageUrl) {
          await cloudinaryRemove(existingProduct.imageUrl);
        }
      } catch (uploadErr) {
        console.warn("Image upload failed, image will not be updated.");
      }
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (err) {
    console.error("Error updating product:", err);
    next(err);
  }
};
