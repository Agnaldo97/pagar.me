import * as express from "express";

import { findAvailable, findWaitingFunds  } from "./actions";

export const router = express.Router();

router.get("/available", findAvailable);
router.get("/waiting_funds", findWaitingFunds);
