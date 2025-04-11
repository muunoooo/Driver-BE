import { Request, Response, NextFunction } from "express";
import prisma from "../../prisma";

export const getAllUsersService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = Math.max(parseInt(req.query.page as string) || 1, 1);
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const search = (req.query.search as string) || "";

    const filterCondition = {
      isDeleted: false,
      name: {
        contains: search,
        mode: "insensitive" as const,
      },
    };

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: filterCondition,
        skip,
        take: limit,
        orderBy: {
          name: "asc",
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      }),
      prisma.user.count({
        where: filterCondition,
      }),
    ]);

    res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.error("Error getting users:", err);
    next(err);
  }
};
