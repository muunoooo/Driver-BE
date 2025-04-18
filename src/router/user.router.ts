import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import { uploader } from "../utils/uploader";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/",
      authenticate,
      authorize(["ADMIN"]),
      this.userController.getAllUsersController
    );
    this.router.get(
      "/profile",
      authenticate,
      this.userController.getProfileController
    );
    this.router.get(
      "/:id",
      authenticate,
      authorize(["ADMIN"]),
      this.userController.getUsersByIdController
    );
    this.router.put(
      "/:id",
      authenticate,
      uploader("memoryStorage", "Avatars-").single("avatar"),
      this.userController.updateUsersController
    );

    this.router.delete(
      "/:id",
      authenticate,
      authorize(["ADMIN"]),
      this.userController.softDeleteUsersController
    );
  }

  getRouter() {
    return this.router;
  }
}
