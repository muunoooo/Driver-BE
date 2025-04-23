"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftRouter = void 0;
const express_1 = require("express");
const authenticate_1 = require("../middlewares/authenticate");
const shift_controller_1 = require("../controllers/shift.controller");
const checkActiveShift_1 = require("../middlewares/checkActiveShift");
class ShiftRouter {
    constructor() {
        this.shiftController = new shift_controller_1.ShiftController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/check-active", authenticate_1.authenticate, this.shiftController.checkActiveShiftController);
        this.router.get("/", authenticate_1.authenticate, this.shiftController.getShiftController);
        this.router.post("/start", authenticate_1.authenticate, this.shiftController.startShiftController);
        this.router.post("/end", authenticate_1.authenticate, checkActiveShift_1.checkActiveShift, this.shiftController.endShiftController);
    }
    getRouter() {
        return this.router;
    }
}
exports.ShiftRouter = ShiftRouter;
