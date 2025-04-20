import { Router } from "express";
import { authenticate } from "../middlewares/authenticate";
import { ShiftController } from "../controllers/shift.controller";
import { RequestHandler } from "express";
import { checkActiveShift } from "../middlewares/checkActiveShift";

export class ShiftRouter {
  private shiftController: ShiftController;
  private router: Router;

  constructor() {
    this.shiftController = new ShiftController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/check-active",
      authenticate,
      this.shiftController.checkActiveShiftController as RequestHandler
    );
    this.router.get(
      "/",
      authenticate,
      this.shiftController.getShiftController as RequestHandler
    );

    this.router.post(
      "/start",
      authenticate,
      this.shiftController.startShiftController as RequestHandler
    );
    this.router.post(
      "/end",
      authenticate,
      checkActiveShift,
      this.shiftController.endShiftController
    );
  }

  getRouter() {
    return this.router;
  }
}
