import { Request, Response, NextFunction } from "express";

export const authorize = (roles: string[]) => {
  return (
    req: Request & { user?: { role?: string } },
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user || !roles.includes(req.user.role!)) {
      return res
        .status(403)
        .send({ message: "Forbidden: You don't have permission" });
    }
    next();
  };
};
