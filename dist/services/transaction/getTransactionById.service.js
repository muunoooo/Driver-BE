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
exports.getTransactionByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getTransactionByIdService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const transaction = yield prisma_1.default.transaction.findUnique({
            where: { id },
            select: {
                id: true,
                totalPrice: true,
                paymentMethod: true,
                cashPaid: true,
                debitCardNo: true,
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
        });
        if (!transaction) {
            res.status(404).json({ message: "Transaction not found" });
            return;
        }
        res.status(200).json({
            message: "Transaction retrieved successfully",
            data: Object.assign(Object.assign({}, transaction), { items: transaction.items.map((item) => ({
                    id: item.id,
                    productId: item.product.id,
                    productName: item.product.name,
                    quantity: item.quantity,
                    price: item.price,
                    subtotal: item.subtotal,
                })) }),
        });
    }
    catch (error) {
        console.error("Error getting transaction by ID:", error);
        next(error);
    }
});
exports.getTransactionByIdService = getTransactionByIdService;
