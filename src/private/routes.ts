import * as express from "express";
// import { router as usersRoutes } from "./routes/users/routes";
import { decodeToken } from "../middleware/auth-service";

export const router = express.Router();

router.use(decodeToken);
router.get("/status", (req, res) => res.json({ status: "UP", status_code: 200 }));