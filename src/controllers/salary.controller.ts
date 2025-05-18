import { salaryService } from "../services/salary.service";
import { Request, Response } from "express";

export const SalaryController = async (req: Request, res: Response) => {
  try {
    const data = await salaryService(req.query);
    res.json(data);
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
