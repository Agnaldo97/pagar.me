import * as express from "express";

import { createUser, loginUser } from "./actions";

export const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
