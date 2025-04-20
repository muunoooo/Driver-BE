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

    this.router.get("/daily-sales", authenticate,  authorize(["ADMIN"]),this.reportController.getDailySalesReportController);
    this.router.get("/monthly-sales", authenticate,  authorize(["ADMIN"]),this.reportController.getDailySalesReportController);
    this.router.get("/yearly-sales", authenticate,  authorize(["ADMIN"]),this.reportController.getDailySalesReportController);

    this.router.get("/daily-sales/items", authenticate, authorize(["ADMIN"]),this.reportController.getDailySalesPerItemController);
    this.router.get("/monthly-sales/items", authenticate, authorize(["ADMIN"]),this.reportController.getDailySalesPerItemController);
    this.router.get("/yearly-sales/items", authenticate, authorize(["ADMIN"]),this.reportController.getDailySalesPerItemController);
    
    this.router.get("/daily-sales/shift", authenticate, authorize(["ADMIN"]),this.reportController.getDailyShiftReportController);
    this.router.get("/monthly-sales/shift", authenticate, authorize(["ADMIN"]),this.reportController.getDailyShiftReportController);
    this.router.get("/yearly-sales/shift", authenticate, authorize(["ADMIN"]),this.reportController.getDailyShiftReportController);
  }

  getRouter() {
    return this.router;
  }
}
