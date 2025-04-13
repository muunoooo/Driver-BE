import { Request, Response, NextFunction } from "express";
import { registerService } from "../services/auth/register.service";
import { loginService } from "../services/auth/login.service";

export class AuthController {
  async registerController(req: Request, res: Response, next: NextFunction) {
    try {
      return registerService(req, res, next);
    } catch (error) {
      next(error);
    }
  }

  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      return loginService(req, res);
    } catch (error) {
      next(error);
    }
  }
}
