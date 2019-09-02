import { UserDTO } from "../../models/UserDTO";
import { IUser } from "../../interfaces/IUser";

export async function getUser(email: string): Promise<UserDTO> {
  let user = await UserDTO.findOne({
    where: { email }
  });
  return user;
}

export async function create(user: IUser): Promise<UserDTO> {
  const response = await UserDTO.create({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return response;
}
