import * as jwt from "jsonwebtoken";
import * as config from "../config";
import { NextFunction, Request, Response } from "express";
import { errorHandler, } from "../errors/Login";
import { ServiceError } from "../utils/ServiceError";

export async function generateToken(data: any) {
  let period = 60 * 5;
  return jwt.sign({ data: data }, config.SALT_KEY, { expiresIn: period })
}

export async function decodeToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (req.method !== "OPTIONS") {
      const token =
        req.get("Authorization") ||
        `bearer ${req.query.t || req.body.authToken}`;
      if (!token) return next();

      req.user = await verify(token.split(" ")[1]);
    }
    next();
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export function verify(token: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    jwt.verify(token, config.SALT_KEY, (err, decoded: any) => {
      if (err || !decoded) {
        throw new ServiceError(err.message)
      }
      resolve(decoded);
    });
  });
}
