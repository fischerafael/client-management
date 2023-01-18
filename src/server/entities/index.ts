export interface Client {
  id: string;
  email: string;
  name: string;
  type: IClientType;
  address: string;
  city: string;
  state: string;
  postCode: string;
  phone: string;
  taxId: string;
  other?: any;
}

export type IClientType = "org" | "individual";
