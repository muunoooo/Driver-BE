import { Router } from "express";

import { authenticate } from "../middlewares/authenticate";

import { ShiftController } from "../controllers/shift.controller";
import { RequestHandler } from "express";

export class ShiftRouter {
  private shiftController: ShiftController;
  private router: Router;

  constructor() {
    this.shiftController = new ShiftController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/start", authenticate,this.shiftController.startShiftController as RequestHandler);
    this.router.post("/end", authenticate,this.shiftController.endShiftController as RequestHandler);
  }

  getRouter() {
    return this.router;
  }
}