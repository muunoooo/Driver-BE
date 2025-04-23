"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const authenticate_1 = require("../middlewares/authenticate");
const authorize_1 = require("../middlewares/authorize");
const product_controller_1 = require("../controllers/product.controller");
const uploader_1 = require("../utils/uploader");
class ProductRouter {
    constructor() {
        this.productController = new product_controller_1.ProductController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), (0, uploader_1.uploader)("memoryStorage", "ProductPhoto-").single("file"), this.productController.createProductController);
        this.router.get("/", authenticate_1.authenticate, this.productController.getAllProductController);
        this.router.get("/:id", authenticate_1.authenticate, this.productController.getProductByIdController);
        this.router.put("/:id", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), (0, uploader_1.uploader)("memoryStorage", "ProductPhoto-").single("file"), this.productController.updateProductController);
        this.router.delete("/:id", authenticate_1.authenticate, (0, authorize_1.authorize)(["ADMIN"]), this.productController.deleteProductController);
    }
    getRouter() {
        return this.router;
    }
}
exports.ProductRouter = ProductRouter;
