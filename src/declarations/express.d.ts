import * as express from "express";
import { ClientDTO } from "../models/ClientDTO";

declare module "express" {
  interface Request {
    client?: ClientDTO;
  }
}
