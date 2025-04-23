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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShiftService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getShiftService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const cashierId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!cashierId) {
            return res.status(400).json({ message: "No cashier ID found" });
        }
        const activeShift = yield prisma_1.default.shift.findFirst({
            where: {
                cashierId,
                endedAt: null,
            },
        });
        if (!activeShift) {
            return res.status(400).json({ message: "No active shift found" });
        }
        return res.status(200).json({
            message: "Active shift found",
            data: activeShift,
        });
    }
    catch (error) {
        console.error("Get active shift error:", error);
        next(error);
    }
});
exports.getShiftService = getShiftService;
