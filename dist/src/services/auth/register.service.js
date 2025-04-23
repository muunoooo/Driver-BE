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
exports.registerService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../../prisma"));
const registerService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).send({ message: "All fields are required" });
            return;
        }
        const existingUser = yield prisma_1.default.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            res.status(400).send({ message: "Email already exists" });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield prisma_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: "CASHIER",
            },
        });
        res.status(201).send({
            message: `User ${user.name} created successfully.`,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    }
    catch (err) {
        console.error("Error during registration:", err);
        return next(err);
    }
});
exports.registerService = registerService;
