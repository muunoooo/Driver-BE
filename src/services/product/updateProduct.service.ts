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

    if (!name || !price || !stock || !category) {
      res
        .status(400)
        .json({ message: "Name, price, stock, and category are required" });
      return;
    }
    if (category !== "MAKANAN" && category !== "MINUMAN") {
      res
        .status(400)
        .json({ message: "Category must be either 'MAKANAN' or 'MINUMAN'" });
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

    let newImageUrl = existingProduct.imageUrl;

    if (file) {
      try {
        const uploaded = await cloudinaryUpload(file, "products");
        newImageUrl = uploaded.secure_url;

        // Hapus gambar lama kalau ada
        if (existingProduct.imageUrl) {
          await cloudinaryRemove(existingProduct.imageUrl);
        }
      } catch (uploadErr) {
        console.warn("Image upload failed, image will not be updated.");
      }
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name,
        price: parseInt(price),
        stock: parseInt(stock),
        category,
        imageUrl: newImageUrl,
      },
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
