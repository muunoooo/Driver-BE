"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authenticate_1 = require("../middlewares/authenticate");
const authorize_1 = require("../middlewares/authorize");
class AuthRouter {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/register", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.authController.registerController);
        this.router.post("/login", this.authController.loginController);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
