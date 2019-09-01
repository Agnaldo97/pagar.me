import * as express from "express";
import * as config from "./config";
import * as morgan from "morgan";
// import { router as apiRoutes } from "./routes";
import cors = require('cors')

const app = express();

app.use(cors());

if (config.ENV === "development") {
  app.use(morgan("dev"));
}

// app.use("/api", apiRoutes);

module.exports = app;

