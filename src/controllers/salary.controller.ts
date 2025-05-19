import { SalaryQuery } from "../types/salary";
import { salaryService } from "../services/salary.service";
import { Request, Response, NextFunction } from "express";

export const SalaryController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      page_size,
      current,
      driver_code,
      name,
      status,
      month,
      year,
    } = req.query;

    if (typeof month !== "string" || typeof year !== "string") {
      res.status(400).json({ message: "month and year are required" });
      return;
    }

    const query: SalaryQuery = {
      page_size: typeof page_size === "string" ? page_size : undefined,
      current: typeof current === "string" ? current : undefined,
      driver_code: typeof driver_code === "string" ? driver_code : undefined,
      name: typeof name === "string" ? name : undefined,
      status: typeof status === "string" ? status : undefined,
      month,
      year,
    };
    console.log("QUERY NAME =>", req.query.name);


    const data = await salaryService(query);
    res.json(data);
  } catch (error: any) {
    console.error(error);
    next(error)
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
