import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { TransactionController } from "../controllers/transaction.controller";
import { RequestHandler } from "express";

export class TransactionRouter {
  private transcationController: TransactionController;
  private router: Router;

  constructor() {
    this.transcationController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", authenticate, this.transcationController.getAllTransactionController);
    this.router.get("/:id", authenticate, this.transcationController.getTransactionByIdController);
    this.router.post("/:id",authenticate, this.transcationController.createTransactionController as RequestHandler);
  }

  getRouter() {
    return this.router;
  }
}
