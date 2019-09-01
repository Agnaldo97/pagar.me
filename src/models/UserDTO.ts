import { Model, Column, Table, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { IUser } from "../interfaces/IUser";

@Table({ modelName: "usuario" })
export class UserDTO extends Model implements IUser {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column({ field: "nome" })
    name!: string;

    @Column({ field: "senha" })
    password!: string;

    @Column
    email!: string;
}
