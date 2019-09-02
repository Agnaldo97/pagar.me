import * as express from "express";
import { router as transactionsRoutes } from "./routes/transactions/routes";
import { decodeToken } from "../middleware/auth-service";

export const router = express.Router();

router.use(decodeToken);
router.use("/transactions", transactionsRoutes);