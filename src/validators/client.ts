import { joi, validateAsPromise } from "./joi.config";
import { IClient } from "../interfaces/IClient";

const create = joi.object().keys({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required()
});

const login = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required()
});

export function validateCreate(model: any): Promise<IClient> {
  return validateAsPromise<IClient>(model, create);
}

export function validateLogin(model: any): Promise<IClient> {
  return validateAsPromise<IClient>(model, login);
}


