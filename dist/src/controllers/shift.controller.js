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
exports.ShiftController = void 0;
const startShift_service_1 = require("../services/shift/startShift.service");
const endShift_service_1 = require("../services/shift/endShift.service");
const checkShift_service_1 = require("../services/shift/checkShift.service");
const getShift_service_1 = require("../services/shift/getShift.service");
class ShiftController {
    getShiftController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getShift_service_1.getShiftService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    startShiftController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, startShift_service_1.startShiftService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    checkActiveShiftController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, checkShift_service_1.checkActiveShiftService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    endShiftController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, endShift_service_1.endShiftService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ShiftController = ShiftController;
