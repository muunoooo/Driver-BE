import { Request, Response, NextFunction } from "express";

export const authorize = (roles: string[]) => {
  return (
    req: Request & { user?: { role?: string } },
    res: Response,
    next: NextFunction
  ): void => {
    if (!req.user || !roles.includes(req.user.role!)) {
      res.status(403).send({ message: "Forbidden: You don't have permission" });
      return;
    }

    next();
  };
};
