import { Request, Response, NextFunction } from "express";
import { dailyReportService } from "../services/report/dailyReport.service";
import { getDailySalesPerItemService } from "../services/report/getDailySalesPerItem.service";
import { getDailySalesServcice } from "../services/report/getDailySalesReport.service";
import { getShiftReportService } from "../services/report/getDailyShiftReport.service";


export class ReportController {
  async dailyReportController(req: Request, res: Response, next: NextFunction) {
    try {
      return dailyReportService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getDailySalesPerItemController(req: Request, res: Response, next: NextFunction) {
    try {
      return getDailySalesPerItemService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getDailySalesReportController(req: Request, res: Response, next: NextFunction) {
    try {
      return getDailySalesServcice(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getDailyShiftReportController(req: Request, res: Response, next: NextFunction) {
    try {
      return getShiftReportService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}
