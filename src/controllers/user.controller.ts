import { Request, Response, NextFunction } from "express";
import { getAllUsersService } from "../services/user/getAllUsers.service";
import { getUserByIdService } from "../services/user/getUserById.service";
import { softDeleteUserService } from "../services/user/softDeleteUser.service";
import { updateUserService } from "../services/user/updateUser.service";

export class UserController {
  async getAllUsersController(req: Request, res: Response, next: NextFunction) {
    try {
      return getAllUsersService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getUsersByIdController(req: Request, res: Response, next: NextFunction) {
    try {
      return getUserByIdService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async softDeleteUsersController(req: Request, res: Response, next: NextFunction) {
    try {
      return softDeleteUserService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async updateUsersController(req: Request, res: Response, next: NextFunction) {
    try {
      return updateUserService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}
