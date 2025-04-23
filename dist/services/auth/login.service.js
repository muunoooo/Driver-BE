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
exports.loginService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const loginService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send({ message: "Email and password are required" });
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).send({ message: "Invalid email format" });
            return;
        }
        const user = yield prisma_1.default.user.findUnique({
            where: { email },
        });
        if (!user) {
            res.status(404).send({ message: "User account not found!" });
            return;
        }
        const isValidPass = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPass) {
            res.status(401).send({ message: "Incorrect password!" });
            return;
        }
        const payload = { id: user.id, role: user.role };
        const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
        if (process.env.NODE_ENV === "development") {
            console.log("Generated Token:", token);
        }
        res.status(200).send({
            message: "Login Successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    }
    catch (err) {
        console.error("Error during login:", err);
        res.status(500).send({ message: err.message || "Login failed" });
    }
});
exports.loginService = loginService;
