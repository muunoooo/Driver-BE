"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const authenticate_1 = require("../middlewares/authenticate");
const authorize_1 = require("../middlewares/authorize");
const uploader_1 = require("../utils/uploader");
class UserRouter {
    constructor() {
        this.userController = new user_controller_1.UserController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.userController.getAllUsersController);
        this.router.get("/profile", authenticate_1.authenticate, this.userController.getProfileController);
        this.router.get("/:id", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.userController.getUsersByIdController);
        this.router.put("/:id", authenticate_1.authenticate, (0, uploader_1.uploader)("memoryStorage", "Avatars-").single("avatar"), (0, authorize_1.authorize)(["ADMIN", "CASHIER"]), this.userController.updateUsersController);
        this.router.delete("/:id", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.userController.softDeleteUsersController);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
