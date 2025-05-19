import { Router } from "express";
import { SalaryController } from "../controllers/salary.controller";

const router = Router();

router.get("/driver/list", SalaryController);

export default router;
