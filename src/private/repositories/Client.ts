import { ClientDTO } from "../../models/ClientDTO";
import { IClient } from "../../interfaces/IClient";

export async function getClient(email: string): Promise<ClientDTO> {
  let client = await ClientDTO.findOne({
    where: { email }
  });
  return client;
}

export async function create(client: IClient): Promise<ClientDTO> {
  const response = await ClientDTO.create({
    name: client.name,
    email: client.email,
    password: client.password,
  });
  return response;
}
