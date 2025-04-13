import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { ReportController } from "../controllers/report.controller";

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
    this.router.get("/monthly", authenticate, this.reportController.monthlyReportController);
    this.router.get("/yearly", authenticate, this.reportController.yearlyReportController);
  }

  getRouter() {
    return this.router;
  }
}
