import { Request } from "express";

export interface JwtPayload {
  id: string;
  role: "admin" | "cashier";
}

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}
