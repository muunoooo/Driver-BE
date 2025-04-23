import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Application, Response, Request } from "express";
import { AuthRouter } from "./router/auth.router";
import { UserRouter } from "./router/user.router";
import { ProductRouter } from "./router/product.router";
import { ReportRouter } from "./router/report.router";
import { ShiftRouter } from "./router/shift.router";
import { TransactionRouter } from "./router/transaction.router";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: `${process.env.BASE_URL_FE}`,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Sukses Bro, Welcome to Mister Bear API" });
});

const authRouter = new AuthRouter();
const productRouter = new ProductRouter();
const reportRouter = new ReportRouter();
const shiftRouter = new ShiftRouter();
const transactionRouter = new TransactionRouter();
const userRouter = new UserRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/product", productRouter.getRouter());
app.use("/api/report", reportRouter.getRouter());
app.use("/api/shift", shiftRouter.getRouter());
app.use("/api/transaction", transactionRouter.getRouter());
app.use("/api/user", userRouter.getRouter());

app.listen(PORT, () => {
  console.log(`server running on -> http://localhost:${PORT}/api`);
});
