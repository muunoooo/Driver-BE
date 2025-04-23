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
exports.startShiftService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const startShiftService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const cashierId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { startCash } = req.body;
        if (!cashierId) {
            return res.status(400).json({ message: "No cashier ID found" });
        }
        if (startCash === undefined || isNaN(startCash)) {
            return res
                .status(400)
                .json({ message: "startCash is required and must be a number" });
        }
        const existingShift = yield prisma_1.default.shift.findFirst({
            where: {
                cashierId,
                endedAt: null,
                isActive: true,
            },
        });
        if (existingShift) {
            return res
                .status(400)
                .json({ message: "You already have an active shift" });
        }
        const newShift = yield prisma_1.default.shift.create({
            data: {
                cashierId,
                startCash: parseInt(startCash.toString()),
                isActive: true,
            },
        });
        res.status(201).json({
            message: "Shift started successfully",
            data: newShift,
        });
    }
    catch (error) {
        console.error("Start shift error:", error);
        next(error);
    }
});
exports.startShiftService = startShiftService;
