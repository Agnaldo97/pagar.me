import * as UserRepository from "../repositories/User";
import { UserDTO } from "../../models/UserDTO";
import { IUser } from "../../interfaces/IUser";

export async function create(user: IUser): Promise<UserDTO> {
  const response: UserDTO= await UserRepository.create({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return response;
}

export async function getUser(email: string): Promise<UserDTO> {
  const user: UserDTO = await UserRepository.getUser(email);
  return user;
}
