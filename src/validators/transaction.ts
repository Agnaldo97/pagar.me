import { joi, validateAsPromise } from "./joi.config";
import { ITransaction } from "../interfaces/ITransaction";

const create = joi.object().keys({
  value: joi.number().required(),
  description: joi.string().required(),
  paymentMethod: joi.string().valid("debit_card", "credit_card").required(),
  cardNumber: joi.number().required(),
  nameClient: joi.string().required(),
  emailClient: joi.string().email().required(),
  cvv: joi.number().required()
});

export function validateCreate(model: any): Promise<ITransaction> {
  return validateAsPromise<ITransaction>(model, create);
}
