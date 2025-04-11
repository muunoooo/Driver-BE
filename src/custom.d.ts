import "express";

export type Role = "admin" | "cashier";

export type UserPayload = {
  id: string;
  role: Role;
};

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}
