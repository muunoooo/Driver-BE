import { Request, Response, NextFunction } from "express";

import { startShiftService } from "../services/shift/startShift.service";
import { AuthenticatedRequest } from "../types";
import { endShiftService } from "../services/shift/endShift.service";
import { checkActiveShiftService } from "../services/shift/checkShift.service";
import { getShiftService } from "../services/shift/getShift.service";

export class ShiftController {
  async getShiftController(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      return getShiftService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async startShiftController(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      return startShiftService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async checkActiveShiftController(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      return checkActiveShiftService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async endShiftController(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      await endShiftService(req, res, next); 
    } catch (error) {
      next(error); 
    }
  }

}
