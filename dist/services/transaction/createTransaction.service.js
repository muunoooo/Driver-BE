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
exports.createTransactionService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const createTransactionService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const cashierId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!cashierId) {
            return res.status(400).json({ message: "No cashier ID found" });
        }
        const { paymentMethod, cashPaid, debitCardNo, items } = req.body;
        if (!paymentMethod || !["CASH", "DEBIT"].includes(paymentMethod)) {
            return res
                .status(400)
                .json({ message: "Invalid or missing payment method" });
        }
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res
                .status(400)
                .json({ message: "Transaction items are required" });
        }
        const activeShift = yield prisma_1.default.shift.findFirst({
            where: { cashierId, endedAt: null },
        });
        if (!activeShift) {
            return res.status(400).json({ message: "No active shift found" });
        }
        const productIds = items.map((item) => item.productId);
        const products = yield prisma_1.default.product.findMany({
            where: { id: { in: productIds } },
        });
        let totalPrice = 0;
        const transactionItems = items.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product)
                throw new Error(`Product not found: ${item.productId}`);
            if (product.stock < item.quantity) {
                throw new Error(`Insufficient stock for product: ${product.name}`);
            }
            const subtotal = product.price * item.quantity;
            totalPrice += subtotal;
            return {
                productId: item.productId,
                quantity: item.quantity,
                price: product.price,
                subtotal,
                product,
            };
        });
        let change = 0;
        if (paymentMethod === "CASH") {
            if (typeof cashPaid !== "number" || cashPaid < totalPrice) {
                return res.status(400).json({ message: "Insufficient cash paid" });
            }
            change = cashPaid - totalPrice;
        }
        else if (paymentMethod === "DEBIT" && !debitCardNo) {
            return res.status(400).json({ message: "Debit card number is required" });
        }
        const productUpdates = transactionItems.map((item) => {
            return prisma_1.default.product.update({
                where: { id: item.productId },
                data: {
                    stock: {
                        decrement: item.quantity,
                    },
                },
            });
        });
        yield Promise.all(productUpdates);
        const transaction = yield prisma_1.default.transaction.create({
            data: {
                cashierId,
                shiftId: activeShift.id,
                totalPrice,
                paymentMethod,
                cashPaid: paymentMethod === "CASH" ? cashPaid : null,
                debitCardNo: paymentMethod === "DEBIT" ? debitCardNo : null,
                change: paymentMethod === "CASH" ? change : null,
                items: {
                    create: transactionItems.map((item) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price,
                        subtotal: item.subtotal,
                    })),
                },
            },
            include: {
                items: true,
            },
        });
        res.status(201).json({
            message: "Transaction created successfully",
            data: transaction,
        });
    }
    catch (error) {
        console.error("Create transaction error:", error);
        next(error);
    }
});
exports.createTransactionService = createTransactionService;
