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
exports.getAllProductsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("@prisma/client");
const getAllProductsService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Math.max(parseInt(req.query.page) || 1, 1);
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const search = req.query.search || "";
        const validSortFields = ["name", "price", "stock", "createdAt"];
        const sortBy = validSortFields.includes(req.query.sortBy)
            ? req.query.sortBy
            : "name";
        const order = req.query.order === "desc" ? "desc" : "asc";
        const category = req.query.category;
        const filterCondition = {
            isDeleted: false,
            name: {
                contains: search,
                mode: "insensitive",
            },
        };
        if (category && Object.values(client_1.Category).includes(category)) {
            filterCondition.category = category;
        }
        const [products, total] = yield Promise.all([
            prisma_1.default.product.findMany({
                where: filterCondition,
                orderBy: {
                    [sortBy]: order,
                },
                skip,
                take: limit,
            }),
            prisma_1.default.product.count({
                where: filterCondition,
            }),
        ]);
        res.status(200).json({
            message: "Products retrieved successfully",
            data: products,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    }
    catch (err) {
        console.error("Error getting paginated and filtered products:", err);
        next(err);
    }
});
exports.getAllProductsService = getAllProductsService;
