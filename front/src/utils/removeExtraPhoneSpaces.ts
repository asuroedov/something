import { ContactInterface } from "../types/contacts";

export function removeExtraPhoneSpaces(contact: ContactInterface) {
  const newPhone = contact.phone
    .split("")
    .filter((char) => char !== " ")
    .join("");

  return { ...contact, phone: newPhone };
}
