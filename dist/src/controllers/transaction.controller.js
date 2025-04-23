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
exports.TransactionController = void 0;
const createTransaction_service_1 = require("../services/transaction/createTransaction.service");
const getAllTransactions_service_1 = require("../services/transaction/getAllTransactions.service");
const getTransactionById_service_1 = require("../services/transaction/getTransactionById.service");
class TransactionController {
    createTransactionController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, createTransaction_service_1.createTransactionService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAllTransactionController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getAllTransactions_service_1.getAllTransactionsService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getTransactionByIdController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getTransactionById_service_1.getTransactionByIdService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TransactionController = TransactionController;
