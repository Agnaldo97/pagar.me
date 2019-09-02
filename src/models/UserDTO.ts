import { Model, Column, Table, PrimaryKey, AutoIncrement, BeforeCreate } from "sequelize-typescript";
import { IUser } from "../interfaces/IUser";
import * as bcrypt from "../utils/bcrypt";    

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

    @BeforeCreate
    public static async setPassword(user: { password: string }){
        const hash = await bcrypt.hash(user.password);
        user.password = hash;
    }

    public checkPassword(password: string): Promise<void> {
        return bcrypt.compare(this.password, password);
    }
}
