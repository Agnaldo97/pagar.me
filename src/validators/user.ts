import { joi, validateAsPromise } from "./joi.config";
import { IUser } from "../interfaces/IUser";

const create = joi.object().keys({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required()
});

const login = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required()
});

export function validateCreate(model: any): Promise<IUser> {
  return validateAsPromise<IUser>(model, create);
}

export function validateLogin(model: any): Promise<IUser> {
  return validateAsPromise<IUser>(model, login);
}


