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
exports.createProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const cloudinary_1 = require("../../utils/cloudinary");
const category_1 = require("../../constants/category");
const createProductService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, stock, category } = req.body;
        const file = req.file;
        if (!name || !price || !stock || !category) {
            res.status(400).json({
                message: "Name, price, stock, and category are required",
            });
            return;
        }
        const parsedPrice = parseInt(price);
        const parsedStock = parseInt(stock);
        if (isNaN(parsedPrice) || isNaN(parsedStock)) {
            res.status(400).json({
                message: "Price and stock must be valid numbers",
            });
            return;
        }
        if (!category_1.ALLOWED_CATEGORIES.includes(category)) {
            res.status(400).json({
                message: `Category must be one of: ${category_1.ALLOWED_CATEGORIES.join(", ")}`,
            });
            return;
        }
        let imageUrl = undefined;
        let imageUploadWarning;
        if (file) {
            try {
                const uploaded = yield (0, cloudinary_1.cloudinaryUpload)(file, "products");
                imageUrl = uploaded.secure_url;
            }
            catch (uploadErr) {
                console.warn("⚠️ Image upload failed:", uploadErr);
                imageUploadWarning =
                    "Image upload failed. Product created without image.";
            }
        }
        const newProduct = yield prisma_1.default.product.create({
            data: {
                name,
                price: parsedPrice,
                stock: parsedStock,
                category,
                imageUrl,
            },
        });
        console.log(`✅ Product created: ${newProduct.name} (ID: ${newProduct.id})`);
        res.status(201).json({
            message: "Product created successfully",
            warning: imageUploadWarning,
            data: newProduct,
        });
    }
    catch (err) {
        console.error("❌ Error creating product:", err);
        next(err);
    }
});
exports.createProductService = createProductService;
