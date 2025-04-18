import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";
import { Prisma, Category } from "@prisma/client";

export const getAllProductsService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = Math.max(parseInt(req.query.page as string) || 1, 1);
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const search = (req.query.search as string) || "";

    const validSortFields = ["name", "price", "stock", "createdAt"];
    const sortBy = validSortFields.includes(req.query.sortBy as string)
      ? (req.query.sortBy as string)
      : "name";

    const order = req.query.order === "desc" ? "desc" : "asc";

    const category = req.query.category as string;

    const filterCondition: Prisma.ProductWhereInput = {
      isDeleted: false,
      name: {
        contains: search,
        mode: "insensitive",
      },
    };

    if (category && Object.values(Category).includes(category as Category)) {
      filterCondition.category = category as Category;
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where: filterCondition,
        orderBy: {
          [sortBy]: order,
        },
        skip,
        take: limit,
      }),
      prisma.product.count({
        where: filterCondition,
      }),
    ]);

    res.status(200).json({
      message: "Products retrieved successfully",
      data: products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error("Error getting paginated and filtered products:", err);
    next(err);
  }
};
