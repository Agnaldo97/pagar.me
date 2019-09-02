import { NextFunction, Request, Response } from "express";
import { errorHandler, } from "../../../errors/User";
import * as userService from "../../services/User";
import * as userValidator from "../../../validators/user";
import { ServiceError } from "../../../utils/ServiceError";
import { IUser } from '../../../interfaces/IUser';
import { generateToken } from "../../../middleware/auth-service";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: IUser  = await userValidator.validateCreate(req.body);
    const verifyUser = await userService.getUser(model.email);

    if (verifyUser) throw new ServiceError("user-already-created")
    const user: IUser = await userService.create(model);

    res.status(200).json({ user });
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: IUser  = await userValidator.validateLogin(req.body);
    const user = await userService.getUser(model.email);

    await user.checkPassword(model.password);

    const token = await generateToken(user.email);

    res.status(200).json({ token: token });
  } catch (err) {
    errorHandler(err, res, next);
  }
}


