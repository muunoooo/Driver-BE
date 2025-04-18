import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { ReportController } from "../controllers/report.controller";
import { authorize } from "../middlewares/authorize";

export class ReportRouter {
  private reportController: ReportController;
  private router: Router;

  constructor() {
    this.reportController = new ReportController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/daily", authenticate, this.reportController.dailyReportController);
    this.router.get("/daily-sales", authenticate,  authorize(["ADMIN"]),this.reportController.getDailySalesReprtController);
    this.router.get("/daily-sales/items", authenticate, authorize(["ADMIN"]),this.reportController.getDailySalesPerItemController);
    this.router.get("/daily-sales/shift", authenticate, authorize(["ADMIN"]),this.reportController.getSalesPerShiftController);
    this.router.get("/daily-sales/cashier", authenticate, authorize(["ADMIN"]),this.reportController.getSalesPerCashierController);
    this.router.get("/daily-sales/cashier-items", authenticate, authorize(["ADMIN"]),this.reportController.getSalesPerCashierAndItemController);
    this.router.get("/daily-sales/payment-method", authenticate, authorize(["ADMIN"]),this.reportController.getSalesByPaymentMethodController);
    this.router.get("/daily-sales/cash-flow", authenticate, authorize(["ADMIN"]),this.reportController.getCashFlowPerShiftController);
  }

  getRouter() {
    return this.router;
  }
}
