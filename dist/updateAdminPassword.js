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
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("./src/prisma"));
function updateAdminPassword() {
    return __awaiter(this, void 0, void 0, function* () {
        const email = "admin@gmail.com";
        const password = "admin123";
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield prisma_1.default.user.update({
            where: { email },
            data: { password: hashedPassword },
        });
        console.log("Password updated successfully");
    });
}
updateAdminPassword();
