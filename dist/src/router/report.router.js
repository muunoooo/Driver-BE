"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportRouter = void 0;
const express_1 = require("express");
const authenticate_1 = require("../middlewares/authenticate");
const report_controller_1 = require("../controllers/report.controller");
const authorize_1 = require("../middlewares/authorize");
class ReportRouter {
    constructor() {
        this.reportController = new report_controller_1.ReportController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/daily", authenticate_1.authenticate, this.reportController.dailyReportController);
        this.router.get("/daily-sales", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailySalesReportController);
        this.router.get("/monthly-sales", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailySalesReportController);
        this.router.get("/yearly-sales", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailySalesReportController);
        this.router.get("/daily-sales/items", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailySalesPerItemController);
        this.router.get("/monthly-sales/items", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailySalesPerItemController);
        this.router.get("/yearly-sales/items", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailySalesPerItemController);
        this.router.get("/daily-sales/shift", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailyShiftReportController);
        this.router.get("/monthly-sales/shift", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailyShiftReportController);
        this.router.get("/yearly-sales/shift", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.reportController.getDailyShiftReportController);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReportRouter = ReportRouter;
