import { Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export const loginService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ message: "Email and password are required" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).send({ message: "Invalid email format" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).send({ message: "User account not found!" });
      return;
    }

    const isValidPass = await bcrypt.compare(password, user.password!);
    if (!isValidPass) {
      res.status(401).send({ message: "Incorrect password!" });
      return;
    }

    const payload = { id: user.id, role: user.role };
    const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

    if (process.env.NODE_ENV === "development") {
      console.log("Generated Token:", token);
    }

    res.status(200).send({
      message: "Login Successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err: any) {
    console.error("Error during login:", err);
    res.status(500).send({ message: err.message || "Login failed" });
  }
};
