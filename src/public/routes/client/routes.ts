import * as express from "express";

import { createClient, loginClient } from "./actions";

export const router = express.Router();

router.post("/create", createClient);
router.post("/login", loginClient);
