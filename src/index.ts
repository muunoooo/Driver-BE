import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Application, Response, Request } from "express";

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
  res.status(200).json({ message: "Welcome to my Cashier API" });
});

app.listen(PORT, () => {
  console.log(`server running on -> http://localhost:${PORT}/api`);
});
