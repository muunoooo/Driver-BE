import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface JwtPayload {
  id: string;
  role: "admin" | "cashier";
}

export const authenticate = (
  req: Request & { user?: JwtPayload },
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send({ message: "Unauthorized: No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verify(token, process.env.JWT_KEY!) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized: Invalid token" });
  }
};
