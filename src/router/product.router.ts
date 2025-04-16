import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import { ProductController } from "../controllers/product.controller";
import { uploader } from "../utils/uploader";

export class ProductRouter {
  private productController: ProductController;
  private router: Router;

  constructor() {
    this.productController = new ProductController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/",
      authenticate,
      authorize(["ADMIN"]),
      uploader("memoryStorage", "ProductPhoto-").single("file"),
      this.productController.createProductController
    );
    this.router.get(
      "/",
      authenticate,
      this.productController.getAllProductController
    );
    this.router.get(
      "/:id",
      authenticate,
      this.productController.getProductByIdController
    );
    this.router.put(
      "/:id",
      authenticate,
      authorize(["ADMIN"]),
      uploader("memoryStorage", "ProductPhoto-").single("file"),
      this.productController.updateProductController
    );
    this.router.delete(
      "/:id",
      authenticate,
      authorize(["ADMIN"]),
      this.productController.deleteProductController
    );
  }

  getRouter() {
    return this.router;
  }
}
