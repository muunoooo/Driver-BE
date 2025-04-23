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
exports.dailyReportService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const dayjs_1 = __importDefault(require("dayjs"));
const dailyReportService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, page = 1, limit = 10 } = req.query;
        if (!date || typeof date !== "string") {
            res.status(400).send({ message: "Invalid or missing 'date' parameter" });
            return;
        }
        const startOfDay = (0, dayjs_1.default)(date).startOf("day").toDate();
        const endOfDay = (0, dayjs_1.default)(date).endOf("day").toDate();
        const totalTransactions = yield prisma_1.default.transaction.count({
            where: {
                createdAt: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        });
        const totalPages = Math.ceil(totalTransactions / parseInt(limit));
        const transactions = yield prisma_1.default.transaction.findMany({
            where: {
                createdAt: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
            skip: (parseInt(page) - 1) * parseInt(limit),
            take: parseInt(limit),
            include: {
                items: {
                    include: {
                        product: true,
                    },
                },
                cashier: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });
        const totalIncome = transactions.reduce((acc, trx) => acc + trx.totalPrice, 0);
        const totalCash = transactions
            .filter((trx) => trx.paymentMethod === "CASH")
            .reduce((acc, trx) => acc + trx.totalPrice, 0);
        const totalDebit = transactions
            .filter((trx) => trx.paymentMethod === "DEBIT")
            .reduce((acc, trx) => acc + trx.totalPrice, 0);
        const itemSummary = {};
        transactions.forEach((trx) => {
            trx.items.forEach((item) => {
                const productId = item.product.id;
                if (!itemSummary[productId]) {
                    itemSummary[productId] = {
                        name: item.product.name,
                        totalQty: item.quantity,
                    };
                }
                else {
                    itemSummary[productId].totalQty += item.quantity;
                }
            });
        });
        const shifts = yield prisma_1.default.shift.findMany({
            where: {
                startedAt: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
            include: {
                cashier: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });
        const formattedShifts = shifts.map((shift) => ({
            cashier: shift.cashier,
            startedAt: shift.startedAt,
            endedAt: shift.endedAt,
            startCash: shift.startCash,
            endCash: shift.endCash,
            totalTransaction: shift.totalTransaction,
            totalCash: shift.totalCash,
            totalDebit: shift.totalDebit,
        }));
        res.status(200).send({
            date,
            summary: {
                totalTransaction: totalTransactions,
                totalIncome,
                totalCash,
                totalDebit,
            },
            perItemSummary: Object.values(itemSummary),
            transactions,
            shifts: formattedShifts,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages,
                totalTransactions,
            },
        });
    }
    catch (error) {
        console.error("Error in daily report:", error);
        next(error);
    }
});
exports.dailyReportService = dailyReportService;
