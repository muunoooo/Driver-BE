import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import { cloudinaryUpload } from "../../utils/cloudinary";

export const createProductService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
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

    let imageUrl: string | undefined = undefined;

    if (file) {
      try {
        const uploaded = await cloudinaryUpload(file, "products");
        imageUrl = uploaded.secure_url;
      } catch (uploadErr) {
        console.warn(
          "Image upload failed, product will be created without image."
        );
      }
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseInt(price),
        stock: parseInt(stock),
        category,
        imageUrl,
      },
    });

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (err) {
    console.error("Error creating product:", err);
    next(err);
  }
};
