import { NextFunction, Request, Response } from "express";
import { errorHandler, } from "../../../errors/Transaction";
import * as transactionService from "../../services/Transaction";
import * as payablesService from "../../services/Payables";
import { ITransaction } from '../../../interfaces/ITransaction';
import { IPayables } from "../../../interfaces/IPayables";


export async function findAvailable(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const allTransactions: Array<ITransaction> = await transactionService.findAvailable(req.client.data);
    const idsTransaction: Array<number> = allTransactions.map(a => a.id)
    const allPayables: Array<IPayables> = await payablesService.findPayables(idsTransaction);
    let available: any = allTransactions;
    await available.forEach(async t => {
      await allPayables.forEach(p =>{
        if(p.transactionID === t.id) t.dataValues.payables = p
      })
    })
    res.status(200).json({ available });
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function findWaitingFunds(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const allTransactions: Array<ITransaction> = await transactionService.findWaitingFunds(req.client.data);
    const idsTransaction: Array<number> = allTransactions.map(a => a.id)
    const allPayables: Array<IPayables> = await payablesService.findPayables(idsTransaction);
    let waitingFunds: any = allTransactions;
    await waitingFunds.forEach(async t => {
      await allPayables.forEach(p => {
        if (p.transactionID === t.id) t.dataValues.payables = p
      })
    })
    res.status(200).json({ waitingFunds });
  } catch (err) {
    errorHandler(err, res, next);
  }
}

