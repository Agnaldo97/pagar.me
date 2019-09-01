import * as express from "express";
import { UserDTO } from "../models/UserDTO";

declare module "express" {
  interface Request {
    user?: UserDTO;
  }
}
