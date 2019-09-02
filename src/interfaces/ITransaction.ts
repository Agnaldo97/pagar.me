export interface ITransaction {
  id?: number;
  value: number;
  description: string;
  paymentMethod: string;
  cardNumber: number;
  nameClient: string;
  expirationDate: Date;
  emailClient: string;
  cvv: number
}
