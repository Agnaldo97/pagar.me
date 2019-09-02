import { PayablesDTO } from "../../models/PayablesDTO";
import { IPayables } from "../../interfaces/IPayables";

export async function create(payables: IPayables): Promise<PayablesDTO> {
    const response = await PayablesDTO.create({
        status: payables.status,
        transactionID: payables.transactionID,
        paymentDate: payables.paymentDate,
        amountPaid: payables.amountPaid
        
    });
    return response;
}
