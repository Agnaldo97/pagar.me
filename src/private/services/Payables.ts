import * as PayablesRepository from "../repositories/Payables";
import { PayablesDTO } from "../../models/PayablesDTO";
import { IPayables } from "../../interfaces/IPayables";
import { ITransaction } from "../../interfaces/ITransaction";

export async function create(transaction: ITransaction): Promise<PayablesDTO> {
  let payables: IPayables = {
    status: "",
    transactionID: 0,
    paymentDate: new Date(),
    amountPaid: 0,
  };
  await PayablesDTO.setValues(payables, transaction);
  const response: PayablesDTO = await PayablesRepository.create(payables);
  return response;
}

