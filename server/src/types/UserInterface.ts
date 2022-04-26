import { ContactInterface } from "./ContactInterface";

type PHONE = string;

export interface UserInterface {
  login: string;
  password: string;
  contacts: Map<PHONE, ContactInterface>;
}
