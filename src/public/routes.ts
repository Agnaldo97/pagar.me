import * as express from "express";
import { router as usersRoutes } from "./routes/users/routes";

export const router = express.Router();

router.use("/user", usersRoutes);

