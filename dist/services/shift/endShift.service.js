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
exports.endShiftService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const endShiftService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const cashierId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { endCash } = req.body;
        if (!endCash || isNaN(endCash)) {
            res
                .status(400)
                .json({ message: "endCash is required and must be a number" });
            return;
        }
        const activeShift = yield prisma_1.default.shift.findFirst({
            where: {
                cashierId,
                endedAt: null,
            },
        });
        if (!activeShift) {
            res.status(404).json({ message: "No active shift found" });
            return;
        }
        const transactions = yield prisma_1.default.transaction.findMany({
            where: {
                cashierId,
                createdAt: {
                    gte: activeShift.startedAt,
                },
            },
        });
        const totalTransaction = transactions.reduce((acc, t) => acc + t.totalPrice, 0);
        const totalCash = transactions
            .filter((t) => t.paymentMethod === "CASH")
            .reduce((acc, t) => acc + t.totalPrice, 0);
        const totalDebit = transactions
            .filter((t) => t.paymentMethod === "DEBIT")
            .reduce((acc, t) => acc + t.totalPrice, 0);
        const endedShift = yield prisma_1.default.shift.update({
            where: { id: activeShift.id },
            data: {
                endCash: parseInt(endCash),
                endedAt: new Date(),
                totalTransaction,
                totalCash,
                totalDebit,
                isActive: false,
            },
        });
        res.status(200).json({
            message: "Shift ended successfully",
            data: endedShift,
        });
    }
    catch (err) {
        console.error("End shift error:", err);
        next(err);
    }
});
exports.endShiftService = endShiftService;
