import { NextFunction, Request, Response } from "express";
import { errorHandler, } from "../../../errors/Transaction";
import * as transactionService from "../../services/Transaction";
import * as transactionValidator from "../../../validators/transaction";
import { ITransaction } from '../../../interfaces/ITransaction';

export async function createTransaction(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: ITransaction  = await transactionValidator.validateCreate(req.body);
    const transaction: ITransaction = await transactionService.create(model);

    res.status(200).json({ transaction });
  } catch (err) {
    errorHandler(err, res, next);
  }
}

