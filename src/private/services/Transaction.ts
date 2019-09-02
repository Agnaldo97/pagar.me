import * as TransactionRepository from "../repositories/Transaction";
import { TransactionDTO } from "../../models/TransactionDTO";
import { ITransaction } from "../../interfaces/ITransaction";

export async function create(transaction: ITransaction): Promise<TransactionDTO> {
  const response: TransactionDTO = await TransactionRepository.create(transaction);
  return response;
}

export async function findAvailable(email: string): Promise<Array<TransactionDTO>> {
  const response: Array<TransactionDTO> = await TransactionRepository.findAvailable(email);
  return response;
}

export async function findWaitingFunds(email: string): Promise<Array<TransactionDTO>> {
  const response: Array<TransactionDTO> = await TransactionRepository.findWaitingFunds(email);
  return response;
}

