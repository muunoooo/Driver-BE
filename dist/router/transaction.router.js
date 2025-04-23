"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRouter = void 0;
const express_1 = require("express");
const authenticate_1 = require("../middlewares/authenticate");
const transaction_controller_1 = require("../controllers/transaction.controller");
const checkActiveShift_1 = require("../middlewares/checkActiveShift");
class TransactionRouter {
    constructor() {
        this.transcationController = new transaction_controller_1.TransactionController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", authenticate_1.authenticate, this.transcationController.getAllTransactionController);
        this.router.get("/:id", authenticate_1.authenticate, this.transcationController.getTransactionByIdController);
        this.router.post("/:id", authenticate_1.authenticate, checkActiveShift_1.checkActiveShift, this.transcationController.createTransactionController);
    }
    getRouter() {
        return this.router;
    }
}
exports.TransactionRouter = TransactionRouter;
