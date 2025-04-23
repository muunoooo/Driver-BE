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
exports.updateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const cloudinary_1 = require("../../utils/cloudinary");
const updateUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const file = req.file;
        if (!name && !email && !password && !file) {
            res.status(400).json({
                message: "At least one field (name, email, password, or avatar) is required",
            });
            return;
        }
        const existingUser = yield prisma_1.default.user.findFirst({
            where: {
                id,
                isDeleted: false,
            },
        });
        if (!existingUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const updatedData = {};
        if (name)
            updatedData.name = name;
        if (email)
            updatedData.email = email;
        if (password) {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            updatedData.password = hashedPassword;
        }
        let avatarUploadWarning;
        if (file) {
            try {
                const uploaded = yield (0, cloudinary_1.cloudinaryUpload)(file, "avatars");
                updatedData.avatar = uploaded.secure_url;
            }
            catch (uploadErr) {
                console.warn("⚠️ Avatar upload failed:", uploadErr);
                avatarUploadWarning = "Avatar upload failed. Profile updated without new avatar.";
            }
        }
        const updatedUser = yield prisma_1.default.user.update({
            where: { id },
            data: updatedData,
        });
        res.status(200).json({
            message: "User updated successfully",
            warning: avatarUploadWarning,
            data: {
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                avatar: updatedUser.avatar,
            },
        });
    }
    catch (err) {
        console.error("Error updating user:", err);
        next(err);
    }
});
exports.updateUserService = updateUserService;
