import { ContactInterface } from "../types/contacts";

export function filterContacts(contacts: ContactInterface[], searchString: string) {
  if (!searchString) return contacts;
  return contacts.filter((contact) => {
    return (
      contact.firstName.toLowerCase().startsWith(searchString.toLowerCase()) ||
      contact.secondName.toLowerCase().startsWith(searchString.toLowerCase()) ||
      contact.phone.startsWith(searchString.toLowerCase())
    );
  });
}
