import { ContactInterface } from "../types/contacts";

export function sortContactsByAlphabet(contact1: ContactInterface, contact2: ContactInterface) {
  return contact1.firstName.localeCompare(contact2.firstName);
}
