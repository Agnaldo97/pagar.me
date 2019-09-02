import * as express from "express";
import { router as transactionsRoutes } from "./routes/transactions/routes";
import { router as payablesRoutes } from "./routes/payables/routes";
import { decodeToken } from "../middleware/auth-service";

export const router = express.Router();

router.use(decodeToken);
router.use("/transactions", transactionsRoutes);
router.use("/payables", payablesRoutes);