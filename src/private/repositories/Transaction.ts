import { TransactionDTO } from "../../models/TransactionDTO";
import { ITransaction } from "../../interfaces/ITransaction";

export async function create(transaction: ITransaction): Promise<TransactionDTO> {
  let stringCardNumber = transaction.cardNumber.toString().slice(-4)
  const response = await TransactionDTO.create({
    value: transaction.value,
    description: transaction.description,
    paymentMethod: transaction.paymentMethod,
    cardNumber: parseFloat(stringCardNumber),
    nameClient: transaction.nameClient,
    expirationDate: new Date(),
    emailClient: transaction.emailClient,
    cvv: transaction.cvv
  });
  return response;
}

export async function findAvailable(email: string): Promise<Array<TransactionDTO>> {
  const response = await TransactionDTO.findAll({
    where: { 
      emailClient: email,
      paymentMethod: "debit_card"
     }
  });
  return response;
}

export async function findWaitingFunds(email: string): Promise<Array<TransactionDTO>> {
  const response = await TransactionDTO.findAll({
    where: { 
      emailClient: email,
      paymentMethod: "credit_card"
     }
  });
  return response;
}
