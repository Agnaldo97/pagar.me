import { Model, Column, Table, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";
import { ITransaction } from "../interfaces/ITransaction";

@Table({ modelName: "transacao" })
export class TransactionDTO extends Model implements ITransaction {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column({ field: "valor", type: DataType.DECIMAL(10, 2) })
    value!: number;

    @Column({ field: "descricao" })
    description!: string;
    
    @Column({ field: "metodo_pagamento" })
    paymentMethod!: string;
    
    @Column({ field: "numero_cartao" })
    cardNumber!: number;
    
    @Column({ field: "nome_cliente" })
    nameClient!: string;

    @Column({ field: "email_cliente" })
    emailClient!: string;

    @Column({ field: "data_expiracao" })
    expirationDate!: Date;

    @Column
    cvv!: number;

}
