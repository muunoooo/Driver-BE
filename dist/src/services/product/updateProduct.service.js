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
exports.updateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const cloudinary_1 = require("../../utils/cloudinary");
const updateProductService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, price, stock, category } = req.body;
        const file = req.file;
        if (!name && !price && !stock && !category && !file) {
            res.status(400).json({
                message: "At least one field (name, price, stock, category, or image) is required",
            });
            return;
        }
        const existingProduct = yield prisma_1.default.product.findFirst({
            where: {
                id,
                isDeleted: false,
            },
        });
        if (!existingProduct) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        const updatedData = {};
        if (name)
            updatedData.name = name;
        if (price)
            updatedData.price = parseInt(price);
        if (stock)
            updatedData.stock = parseInt(stock);
        if (category) {
            if (category !== "FOOD" && category !== "DRINK") {
                res
                    .status(400)
                    .json({ message: "Category must be either 'FOOD' or 'DRINK'" });
                return;
            }
            updatedData.category = category;
        }
        if (file) {
            try {
                const uploaded = yield (0, cloudinary_1.cloudinaryUpload)(file, "products");
                updatedData.imageUrl = uploaded.secure_url;
                if (existingProduct.imageUrl) {
                    yield (0, cloudinary_1.cloudinaryRemove)(existingProduct.imageUrl);
                }
            }
            catch (uploadErr) {
                console.warn("Image upload failed, image will not be updated.");
            }
        }
        const updatedProduct = yield prisma_1.default.product.update({
            where: { id },
            data: updatedData,
        });
        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct,
        });
    }
    catch (err) {
        console.error("Error updating product:", err);
        next(err);
    }
});
exports.updateProductService = updateProductService;
