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
exports.softDeleteUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const softDeleteUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield prisma_1.default.user.findUnique({
            where: { id },
        });
        if (!user || user.isDeleted) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        yield prisma_1.default.user.update({
            where: { id },
            data: {
                isDeleted: true,
                email: `deleted+${id}@email.com`,
            },
        });
        res.status(200).json({
            message: `User ${user.name} soft-deleted successfully`,
        });
    }
    catch (err) {
        console.error("Error soft-deleting user:", err);
        next(err);
    }
});
exports.softDeleteUserService = softDeleteUserService;
