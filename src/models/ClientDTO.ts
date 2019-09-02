import { Model, Column, Table, PrimaryKey, AutoIncrement, BeforeCreate } from "sequelize-typescript";
import { IClient } from "../interfaces/IClient";
import * as bcrypt from "../utils/bcrypt";    

@Table({ modelName: "cliente" })
export class ClientDTO extends Model implements IClient {
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

    data: string;

    @BeforeCreate
    public static async setPassword(client: { password: string }){
        const hash = await bcrypt.hash(client.password);
        client.password = hash;
    }

    public checkPassword(password: string) {
        return bcrypt.compare(this.password, password);
    }
}
