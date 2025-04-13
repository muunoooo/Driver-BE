import { Request, Response, NextFunction } from "express";
import { dailyReportService } from "../services/report/dailyReport.service";
import { monthlyReportService } from "../services/report/monthlyReport.service";
import { yearlyReportService } from "../services/report/yearlyReport.service";

export class ReportController {
  async dailyReportController(req: Request, res: Response, next: NextFunction) {
    try {
      return dailyReportService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async monthlyReportController(req: Request, res: Response, next: NextFunction) {
    try {
      return monthlyReportService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async yearlyReportController(req: Request, res: Response, next: NextFunction) {
    try {
      return yearlyReportService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}
