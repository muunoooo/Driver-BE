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
exports.getAllTransactionsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAllTransactionsService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Math.max(parseInt(req.query.page) || 1, 1);
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const search = req.query.search || "";
        if (!req.user) {
            res
                .status(401)
                .json({ message: "Unauthorized: No user info in request" });
            return;
        }
        const isAdmin = req.user.role === "admin";
        const filterCondition = isAdmin
            ? {
                cashier: {
                    is: {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                },
            }
            : {
                cashierId: req.user.id,
            };
        const [transactions, total] = yield Promise.all([
            prisma_1.default.transaction.findMany({
                where: filterCondition,
                skip,
                take: limit,
                orderBy: {
                    createdAt: "desc",
                },
                select: {
                    id: true,
                    totalPrice: true,
                    paymentMethod: true,
                    cashPaid: true,
                    change: true,
                    createdAt: true,
                    cashier: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    shift: {
                        select: {
                            id: true,
                            startedAt: true,
                            endedAt: true,
                        },
                    },
                    items: {
                        select: {
                            id: true,
                            quantity: true,
                            price: true,
                            subtotal: true,
                            product: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                },
            }),
            prisma_1.default.transaction.count({
                where: filterCondition,
            }),
        ]);
        res.status(200).json({
            message: "Transactions retrieved successfully",
            data: transactions.map((trx) => (Object.assign(Object.assign({}, trx), { items: trx.items.map((item) => ({
                    id: item.id,
                    productId: item.product.id,
                    productName: item.product.name,
                    quantity: item.quantity,
                    price: item.price,
                    subtotal: item.subtotal,
                })) }))),
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    }
    catch (error) {
        console.error("Error getting transactions:", error);
        next(error);
    }
});
exports.getAllTransactionsService = getAllTransactionsService;
