import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types";
import { createTransactionService } from "../services/transaction/createTransaction.service";
import { getAllTransactionsService } from "../services/transaction/getAllTransactions.service";
import { getTransactionByIdService } from "../services/transaction/getTransactionById.service";


export class TransactionController {
  async createTransactionController(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      return createTransactionService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getAllTransactionController(req: Request, res: Response, next: NextFunction) {
    try {
      return getAllTransactionsService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getTransactionByIdController(req: Request, res: Response, next: NextFunction) {
    try {
      return getTransactionByIdService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}
