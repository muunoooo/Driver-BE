import dotenv from "dotenv";
dotenv.config();

import express, { Application, Response, Request } from "express";
import salaryRouter from "./router/salary.route"

const PORT: number = 8000;

const app: Application = express();

app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Sukses Bro, Welcome to Driver Salary API" });
});

app.use("/v1/salary", salaryRouter);

app.listen(PORT, () => {
  console.log(`server running on -> http://localhost:${PORT}/api`);
});
