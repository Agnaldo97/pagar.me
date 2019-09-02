import * as express from "express";
import { router as clientsRoutes } from "./routes/client/routes";

export const router = express.Router();

router.use("/client", clientsRoutes);

