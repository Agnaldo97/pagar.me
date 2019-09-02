import { Model, Column, Table, PrimaryKey, AutoIncrement, BeforeCreate } from "sequelize-typescript";
import { IPayables } from "../interfaces/IPayables";
import { ITransaction } from "../interfaces/ITransaction";

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

    @Column({ field: "valor_pago" })
    amountPaid!: number;


    public static async setValues(payables: IPayables, transaction: ITransaction) {
        if (transaction.paymentMethod === ("credit_card")) {
            payables.transactionID = transaction.id
            payables.status = "waiting_funds"
            //new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10)
            payables.paymentDate = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 30)
            payables.amountPaid = transaction.value * 0.5
        } else {
            payables.transactionID = transaction.id
            payables.status = "paid"
            payables.paymentDate = new Date();
            payables.amountPaid = transaction.value * 0.3
       }
    }
}
