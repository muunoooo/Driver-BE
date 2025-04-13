import { Request, Response, NextFunction } from "express";

import { startShiftService } from "../services/shift/startShift.service";
import { AuthenticatedRequest } from "../types";
import { endShiftService } from "../services/shift/endShift.service";

export class ShiftController {
  async startShiftController(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      return startShiftService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async endShiftController(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      return endShiftService(req, res, next);
    } catch (error) {
      next(error);
    }
  }

}
