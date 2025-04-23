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
exports.softDeleteProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const softDeleteProductService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existingProduct = yield prisma_1.default.product.findUnique({
            where: { id },
        });
        if (!existingProduct || existingProduct.isDeleted) {
            res.status(404).json({ message: "Product not found or already deleted" });
            return;
        }
        const deletedProduct = yield prisma_1.default.product.update({
            where: { id },
            data: {
                isDeleted: true,
            },
        });
        res.status(200).json({
            message: "Product deleted (soft) successfully",
            data: deletedProduct,
        });
    }
    catch (err) {
        console.error("Error soft deleting product:", err);
        next(err);
    }
});
exports.softDeleteProductService = softDeleteProductService;
