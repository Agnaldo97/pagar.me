import * as ClientRepository from "../repositories/Client";
import { ClientDTO } from "../../models/ClientDTO";
import { IClient } from "../../interfaces/IClient";

export async function create(client: IClient): Promise<ClientDTO> {
  const response: ClientDTO = await ClientRepository.create({
    name: client.name,
    email: client.email,
    password: client.password,
  });
  return response;
}

export async function getClient(email: string): Promise<ClientDTO> {
  const client: ClientDTO = await ClientRepository.getClient(email);
  return client;
}
