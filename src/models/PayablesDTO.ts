import { Model, Column, Table, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";
import { IPayables } from "../interfaces/IPayables";
import { ITransaction } from "../interfaces/ITransaction";
import * as config from "../config";

@Table({ modelName: "pagaveis" })
export class PayablesDTO extends Model implements IPayables {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    status!: string;

    @Column({ field: "data_pagamento" })
    paymentDate!: Date;

    @Column({ field: "id_transacao" })
    transactionID!: number;

    @Column({ field: "valor_pago", type: DataType.DECIMAL(10, 2) })
    amountPaid!: number;


    public static async setValues(payables: IPayables, transaction: ITransaction) {
        if (transaction.paymentMethod === ("credit_card")) {
            payables.transactionID = transaction.id
            payables.status = "waiting_funds"
            //new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10)
            payables.paymentDate = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 30)
            //Calc Fee
            payables.amountPaid = transaction.value - (transaction.value * config.FEE_CREDIT_CARD)
        } else {
            payables.transactionID = transaction.id
            payables.status = "paid"
            payables.paymentDate = new Date();
            //Calc Fee
            payables.amountPaid = transaction.value - (transaction.value * config.FEE_DEBIT_CARD)
       }
    }
}
