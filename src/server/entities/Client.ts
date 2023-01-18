export interface Client {
  id: string;
  name: string;
  type: "org" | "individual";
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postCode: string;
  taxId: string;
}
