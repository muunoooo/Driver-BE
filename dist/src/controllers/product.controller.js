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
exports.ProductController = void 0;
const createProduct_service_1 = require("../services/product/createProduct.service");
const deleteProduct_service_1 = require("../services/product/deleteProduct.service");
const getAllProduct_service_1 = require("../services/product/getAllProduct.service");
const getProductById_service_1 = require("../services/product/getProductById.service");
const updateProduct_service_1 = require("../services/product/updateProduct.service");
class ProductController {
    createProductController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, createProduct_service_1.createProductService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteProductController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, deleteProduct_service_1.softDeleteProductService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAllProductController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getAllProduct_service_1.getAllProductsService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProductByIdController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, getProductById_service_1.getProductByIdService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateProductController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, updateProduct_service_1.updateProductService)(req, res, next);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ProductController = ProductController;
