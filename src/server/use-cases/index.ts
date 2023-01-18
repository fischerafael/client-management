import { IClientType } from "../entities";

interface IClientUseCaseInput {
  email: string;
  name: string;
  type: IClientType;
  address?: string;
  city?: string;
  state?: string;
  postCode?: string;
  phone?: string;
  taxId?: string;
  other?: string;
}

interface IClientUseCaseOutput {
  id: string;
}

export class ClientUseCase {
  public async create(
    input: IClientUseCaseInput,
    hasClient: (email: string) => Promise<boolean>
  ): Promise<IClientUseCaseOutput> {
    if (await hasClient(input.email)) {
      throw new Error("Client with this email already exist");
    }

    return { id: "hauha" };
  }
}
