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
exports.getAllUsersService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const getAllUsersService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Math.max(parseInt(req.query.page) || 1, 1);
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const search = req.query.query || "";
        const isSearching = search.trim() !== "";
        const filterCondition = {
            isDeleted: false,
            name: {
                contains: search,
                mode: "insensitive",
            },
            role: {
                not: "ADMIN",
            },
        };
        const [users, total] = yield Promise.all([
            prisma_1.default.user.findMany({
                where: filterCondition,
                skip: isSearching ? undefined : skip,
                take: isSearching ? undefined : limit,
                orderBy: {
                    name: "asc",
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    createdAt: true,
                },
            }),
            prisma_1.default.user.count({
                where: filterCondition,
            }),
        ]);
        res.status(200).json({
            message: "Users retrieved successfully",
            data: users,
            pagination: {
                total,
                page: isSearching ? 1 : page,
                limit: isSearching ? total : limit,
                totalPages: isSearching ? 1 : Math.ceil(total / limit),
            },
        });
    }
    catch (err) {
        console.error("Error getting users:", err);
        next(err);
    }
});
exports.getAllUsersService = getAllUsersService;
