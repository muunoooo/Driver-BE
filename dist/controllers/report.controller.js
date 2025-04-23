"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const dailyReport_service_1 = require("../services/report/dailyReport.service");
const getDailySalesPerItem_service_1 = require("../services/report/getDailySalesPerItem.service");
const getDailySalesReport_service_1 = require("../services/report/getDailySalesReport.service");
const getDailyShiftReport_service_1 = require("../services/report/getDailyShiftReport.service");
class ReportController {
    dailyReportController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, dailyReport_service_1.dailyReportService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getDailySalesPerItemController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getDailySalesPerItem_service_1.getDailySalesPerItemService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getDailySalesReportController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getDailySalesReport_service_1.getDailySalesServcice)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getDailyShiftReportController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getDailyShiftReport_service_1.getShiftReportService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ReportController = ReportController;
