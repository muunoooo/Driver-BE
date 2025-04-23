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
exports.checkActiveShift = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const checkActiveShift = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const cashierId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (!cashierId) {
            res.status(400).json({ message: "No active user found" });
            return;
        }
        const activeShift = yield prisma_1.default.shift.findFirst({
            where: {
                cashierId,
                endedAt: null,
                isActive: true,
            },
        });
        if (!activeShift) {
            res.status(400).json({ message: "No active shift found." });
            return;
        }
        next();
    }
    catch (error) {
        console.error("Error checking active shift:", error);
        res.status(500).json({ message: "Server error, please try again." });
    }
});
exports.checkActiveShift = checkActiveShift;
