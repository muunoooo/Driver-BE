"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("./router/auth.router");
const user_router_1 = require("./router/user.router");
const product_router_1 = require("./router/product.router");
const report_router_1 = require("./router/report.router");
const shift_router_1 = require("./router/shift.router");
const transaction_router_1 = require("./router/transaction.router");
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: `${process.env.BASE_URL_FE}`,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));
app.get("/api", (res) => {
    res.status(200).json({ message: "Welcome to Mister Bear API" });
});
const authRouter = new auth_router_1.AuthRouter();
const productRouter = new product_router_1.ProductRouter();
const reportRouter = new report_router_1.ReportRouter();
const shiftRouter = new shift_router_1.ShiftRouter();
const transactionRouter = new transaction_router_1.TransactionRouter();
const userRouter = new user_router_1.UserRouter();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/product", productRouter.getRouter());
app.use("/api/report", reportRouter.getRouter());
app.use("/api/shift", shiftRouter.getRouter());
app.use("/api/transaction", transactionRouter.getRouter());
app.use("/api/user", userRouter.getRouter());
app.listen(PORT, () => {
    console.log(`server running on -> http://localhost:${PORT}/api`);
});
