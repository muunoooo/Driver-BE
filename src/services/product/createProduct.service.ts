import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import { cloudinaryUpload } from "../../utils/cloudinary";
import { ALLOWED_CATEGORIES } from "../../constants/category";

export const createProductService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, price, stock, category } = req.body;
    const file = req.file;

    if (!name || !price || !stock || !category) {
      res.status(400).json({
        message: "Name, price, stock, and category are required",
      });
      return;
    }

    const parsedPrice = parseInt(price);
    const parsedStock = parseInt(stock);
    if (isNaN(parsedPrice) || isNaN(parsedStock)) {
      res.status(400).json({
        message: "Price and stock must be valid numbers",
      });
      return;
    }

    if (!ALLOWED_CATEGORIES.includes(category)) {
      res.status(400).json({
        message: `Category must be one of: ${ALLOWED_CATEGORIES.join(", ")}`,
      });
      return;
    }

    let imageUrl: string | undefined = undefined;
    let imageUploadWarning: string | undefined;

    if (file) {
      try {
        const uploaded = await cloudinaryUpload(file, "products");
        imageUrl = uploaded.secure_url;
      } catch (uploadErr) {
        console.warn("⚠️ Image upload failed:", uploadErr);
        imageUploadWarning =
          "Image upload failed. Product created without image.";
      }
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parsedPrice,
        stock: parsedStock,
        category,
        imageUrl,
      },
    });

    console.log(`✅ Product created: ${newProduct.name} (ID: ${newProduct.id})`);

    res.status(201).json({
      message: "Product created successfully",
      warning: imageUploadWarning,
      data: newProduct,
    });
  } catch (err) {
    console.error("❌ Error creating product:", err);
    next(err);
  }
};
