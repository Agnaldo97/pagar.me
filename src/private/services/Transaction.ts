import * as TransactionRepository from "../repositories/Transaction";
import { TransactionDTO } from "../../models/TransactionDTO";
import { ITransaction } from "../../interfaces/ITransaction";

export async function create(transaction: ITransaction): Promise<TransactionDTO> {
  const response: TransactionDTO = await TransactionRepository.create(transaction);
  return response;
}

