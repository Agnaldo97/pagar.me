import { NextFunction, Request, Response } from "express";
import { errorHandler, } from "../../../errors/Client";
import * as clientService from "../../services/Client";
import * as clientValidator from "../../../validators/client";
import { ServiceError } from "../../../utils/ServiceError";
import { IClient } from '../../../interfaces/IClient';
import { generateToken } from "../../../middleware/auth-service";

export async function createClient(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: IClient = await clientValidator.validateCreate(req.body);
    const verifyClient = await clientService.getClient(model.email);

    if (verifyClient) throw new ServiceError("client-already-created")
    const client: IClient = await clientService.create(model);

    res.status(200).json({ client });
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function loginClient(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: IClient = await clientValidator.validateLogin(req.body);
    const client = await clientService.getClient(model.email);

    await client.checkPassword(model.password);

    const token = await generateToken(client.email);

    res.status(200).json({ token: token });
  } catch (err) {
    errorHandler(err, res, next);
  }
}


