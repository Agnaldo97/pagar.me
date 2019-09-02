import { NextFunction, Request, Response } from "express";
import { errorHandler, } from "../../../errors/Transaction";
import * as transactionService from "../../services/Transaction";
import * as payablesService from "../../services/Payables";
import * as transactionValidator from "../../../validators/transaction";
import { ITransaction } from '../../../interfaces/ITransaction';
import { IPayables } from "../../../interfaces/IPayables";


export async function createTransaction(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const model: ITransaction = await transactionValidator.validateCreate(req.body);
    const transaction: ITransaction = await transactionService.create(model);
    const payables: IPayables = await payablesService.create(transaction);

    res.status(200).json({ transaction, payables });
  } catch (err) {
    errorHandler(err, res, next);
  }
}

