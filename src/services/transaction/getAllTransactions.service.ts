import {  Response, NextFunction } from "express";
import prisma from "../../prisma";
import { AuthenticatedRequest } from "../../types";

export const getAllTransactionsService = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = Math.max(parseInt(req.query.page as string) || 1, 1);
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const search = (req.query.search as string) || "";

    if (!req.user) {
      res
        .status(401)
        .json({ message: "Unauthorized: No user info in request" });
      return;
    }

    const isAdmin = req.user.role === "admin";

    const filterCondition = isAdmin
      ? {
          cashier: {
            is: {
              name: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
          },
        }
      : {
          cashierId: req.user.id,
        };

    const [transactions, total] = await Promise.all([
      prisma.transaction.findMany({
        where: filterCondition,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          totalPrice: true,
          paymentMethod: true,
          cashPaid: true,
          change: true,
          createdAt: true,
          cashier: {
            select: {
              id: true,
              name: true,
            },
          },
          shift: {
            select: {
              id: true,
              startedAt: true,
              endedAt: true,
            },
          },
          items: {
            select: {
              id: true,
              quantity: true,
              price: true,
              subtotal: true,
              product: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      }),

      prisma.transaction.count({
        where: filterCondition,
      }),
    ]);

    res.status(200).json({
      message: "Transactions retrieved successfully",
      data: transactions.map((trx) => ({
        ...trx,
        items: trx.items.map((item) => ({
          id: item.id,
          productId: item.product.id,
          productName: item.product.name,
          quantity: item.quantity,
          price: item.price,
          subtotal: item.subtotal,
        })),
      })),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error getting transactions:", error);
    next(error);
  }
};
