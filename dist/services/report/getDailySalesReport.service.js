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
exports.getDailySalesServcice = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getDailySalesServcice = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.query;
        if (!date) {
            res.status(400).send({ message: "Date parameter is required" });
            return;
        }
        let whereClause;
        const dateParts = date.split("-");
        if (dateParts.length === 3) {
            const startOfDay = new Date(`${date}T00:00:00`);
            const endOfDay = new Date(`${date}T23:59:59`);
            whereClause = {
                createdAt: {
                    gte: startOfDay,
                    lt: endOfDay,
                },
            };
        }
        else if (dateParts.length === 2) {
            const startOfMonth = new Date(`${date}-01T00:00:00`);
            const endOfMonth = new Date(startOfMonth);
            endOfMonth.setMonth(endOfMonth.getMonth() + 1);
            endOfMonth.setDate(0);
            whereClause = {
                createdAt: {
                    gte: startOfMonth,
                    lt: endOfMonth,
                },
            };
        }
        else if (dateParts.length === 1) {
            const startOfYear = new Date(`${date}-01-01T00:00:00`);
            const endOfYear = new Date(`${date}-12-31T23:59:59`);
            whereClause = {
                createdAt: {
                    gte: startOfYear,
                    lt: endOfYear,
                },
            };
        }
        else {
            res.status(400).send({ message: "Invalid date format" });
            return;
        }
        const salesData = yield prisma_1.default.transaction.aggregate({
            _sum: {
                totalPrice: true,
            },
            where: whereClause,
        });
        res.status(200).send(salesData);
    }
    catch (err) {
        next(err);
        res.status(500).send("Error fetching sales report");
    }
});
exports.getDailySalesServcice = getDailySalesServcice;
