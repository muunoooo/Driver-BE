import { Request, Response, NextFunction } from "express";
import { dailyReportService } from "../services/report/dailyReport.service";
import { getCashFlowPerShiftService } from "../services/report/getCashFlowPerShift.service";
import { getDailySalesPerItemService } from "../services/report/getDailySalesPerItem.service";
import { getDailySalesServcice } from "../services/report/getDailySalesReport.service";
import { getSalesByPaymentMethodService } from "../services/report/getSalesByPaymentMethod.service";
import { getSalesPerCashierService } from "../services/report/getSalesPerCashier.service";
import { getSalesPerCashierAndItemService } from "../services/report/getSalesPerCashierAndItem.service";
import { getSalesPerShiftService } from "../services/report/getSalesPerShift.service";


export class ReportController {
  async dailyReportController(req: Request, res: Response, next: NextFunction) {
    try {
      return dailyReportService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getCashFlowPerShiftController(req: Request, res: Response, next: NextFunction) {
    try {
      return getCashFlowPerShiftService(req, res, next);
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
  async getDailySalesReprtController(req: Request, res: Response, next: NextFunction) {
    try {
      return getDailySalesServcice(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getSalesByPaymentMethodController(req: Request, res: Response, next: NextFunction) {
    try {
      return getSalesByPaymentMethodService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getSalesPerCashierController(req: Request, res: Response, next: NextFunction) {
    try {
      return getSalesPerCashierService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getSalesPerCashierAndItemController(req: Request, res: Response, next: NextFunction) {
    try {
      return getSalesPerCashierAndItemService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getSalesPerShiftController(req: Request, res: Response, next: NextFunction) {
    try {
      return getSalesPerShiftService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  
}
