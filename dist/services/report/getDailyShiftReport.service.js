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
exports.getShiftReportService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getShiftReportService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, page = "1", limit = "10" } = req.query;
        if (!date) {
            res.status(400).send({ message: "Date parameter is required" });
            return;
        }
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);
        const skip = (pageNumber - 1) * limitNumber;
        let whereClause;
        const dateParts = date.split("-");
        if (dateParts.length === 3) {
            const startOfDay = new Date(`${date}T00:00:00`);
            const endOfDay = new Date(`${date}T23:59:59`);
            whereClause = {
                startedAt: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            };
        }
        else if (dateParts.length === 2) {
            const startOfMonth = new Date(`${date}-01T00:00:00`);
            const endOfMonth = new Date(startOfMonth);
            endOfMonth.setMonth(endOfMonth.getMonth() + 1);
            endOfMonth.setDate(0);
            whereClause = {
                startedAt: {
                    gte: startOfMonth,
                    lte: endOfMonth,
                },
            };
        }
        else if (dateParts.length === 1) {
            const startOfYear = new Date(`${date}-01-01T00:00:00`);
            const endOfYear = new Date(`${date}-12-31T23:59:59`);
            whereClause = {
                startedAt: {
                    gte: startOfYear,
                    lte: endOfYear,
                },
            };
        }
        else {
            res.status(400).send({ message: "Invalid date format" });
            return;
        }
        const totalCount = yield prisma_1.default.shift.count({
            where: whereClause,
        });
        const shifts = yield prisma_1.default.shift.findMany({
            where: whereClause,
            include: {
                cashier: true,
                transactions: true,
            },
            orderBy: {
                startedAt: "asc",
            },
            skip,
            take: limitNumber,
        });
        const result = shifts.map((shift) => {
            const totalTransaction = shift.transactions.reduce((sum, tx) => sum + tx.totalPrice, 0);
            const totalDebit = shift.transactions.reduce((sum, tx) => (tx.paymentMethod === "DEBIT" ? sum + tx.totalPrice : sum), 0);
            const totalCash = shift.transactions.reduce((sum, tx) => (tx.paymentMethod === "CASH" ? sum + tx.totalPrice : sum), 0);
            return {
                shiftId: shift.id,
                startedAt: shift.startedAt,
                endedAt: shift.endedAt,
                cashier: {
                    id: shift.cashier.id,
                    name: shift.cashier.name,
                    email: shift.cashier.email,
                },
                startCash: shift.startCash,
                endCash: shift.endCash,
                totalTransaction,
                totalDebit,
                totalCash,
                isActive: shift.endedAt === null,
            };
        });
        res.status(200).send({
            data: result,
            pagination: {
                totalCount,
                totalPages: Math.ceil(totalCount / limitNumber),
                currentPage: pageNumber,
            },
        });
    }
    catch (err) {
        next(err);
        res.status(500).send("Error fetching shift report");
    }
});
exports.getShiftReportService = getShiftReportService;
