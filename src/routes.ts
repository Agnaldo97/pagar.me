import { Router } from "express";

import { router as privateRoutes } from "./private/routes";
import { router as publicRoutes } from "./public/routes";
export const router = Router();

router.use("/public", publicRoutes);
router.use("/private", privateRoutes);
