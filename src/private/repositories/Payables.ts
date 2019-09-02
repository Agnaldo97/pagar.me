import { PayablesDTO } from "../../models/PayablesDTO";
import { IPayables } from "../../interfaces/IPayables";
import { Op } from "sequelize";

export async function create(payables: IPayables): Promise<PayablesDTO> {
    const response = await PayablesDTO.create({
        status: payables.status,
        transactionID: payables.transactionID,
        paymentDate: payables.paymentDate,
        amountPaid: payables.amountPaid

    });
    return response;
}

export async function listIds(ids: Array<number>): Promise<Array<PayablesDTO>> {
    const response = await PayablesDTO.findAll({
        where: {
            transactionID: {
                [Op.in]: ids
            }
        }
    });
    return response;
}
