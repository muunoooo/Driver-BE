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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const getAllUsers_service_1 = require("../services/user/getAllUsers.service");
const getUserById_service_1 = require("../services/user/getUserById.service");
const softDeleteUser_service_1 = require("../services/user/softDeleteUser.service");
const updateUser_service_1 = require("../services/user/updateUser.service");
const getProfile_service_1 = require("../services/user/getProfile.service");
class UserController {
    getAllUsersController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getAllUsers_service_1.getAllUsersService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUsersByIdController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getUserById_service_1.getUserByIdService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProfileController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getProfile_service_1.getUserProfile)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    softDeleteUsersController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, softDeleteUser_service_1.softDeleteUserService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateUsersController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, updateUser_service_1.updateUserService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
