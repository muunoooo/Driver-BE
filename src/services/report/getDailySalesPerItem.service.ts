import { NextFunction, Request, Response } from "express";
import prisma from "../../prisma";

interface SalesQueryParams {
  date?: string;
}

export const getDailySalesPerItemService = async (
  req: Request<{}, {}, {}, SalesQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { date } = req.query;

    if (!date) {
      res.status(400).send({ message: "Date parameter is required" });
      return;
    }

    let whereClause: { createdAt: { gte: Date; lt: Date } };

    const dateParts = date.split("-");

    if (dateParts.length === 3) {
      const startOfDay = new Date(`${date}T00:00:00`);
      const endOfDay = new Date(`${date}T23:59:59`);
      whereClause = {
        createdAt: {
          gte: startOfDay,
          lt: endOfDay,
        },
      };
    } else if (dateParts.length === 2) {
      const startOfMonth = new Date(`${date}-01T00:00:00`);
      const endOfMonth = new Date(startOfMonth);
      endOfMonth.setMonth(endOfMonth.getMonth() + 1);
      endOfMonth.setDate(0);
      whereClause = {
        createdAt: {
          gte: startOfMonth,
          lt: endOfMonth,
        },
      };
    } else if (dateParts.length === 1) {
      const startOfYear = new Date(`${date}-01-01T00:00:00`);
      const endOfYear = new Date(`${date}-12-31T23:59:59`);
      whereClause = {
        createdAt: {
          gte: startOfYear,
          lt: endOfYear,
        },
      };
    } else {
      res.status(400).send({ message: "Invalid date format" });
      return;
    }

    const salesPerItem = await prisma.transactionItem.groupBy({
      by: ["productId"],
      _sum: {
        subtotal: true,
        quantity: true,
      },
      where: {
        transaction: {
          createdAt: whereClause.createdAt,
        },
      },
    });

    const productIds = salesPerItem.map((item) => item.productId);
    const products = await prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
    });

    const result = salesPerItem.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return {
        productId: item.productId,
        productName: product ? product.name : "Unknown Product",
        subtotal: item._sum.subtotal,
        quantity: item._sum.quantity,
      };
    });

    result.sort((a, b) => a.productName.localeCompare(b.productName));

    res.status(200).send(result);
  } catch (err) {
    next(err);
    res.status(500).send("Error fetching daily sales per item report");
  }
};
