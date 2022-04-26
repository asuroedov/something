import { UserInterface } from "../types/UserInterface";
import { ContactInterface } from "../types/ContactInterface";

class ContactsService {
  getContacts(user: UserInterface) {
    return user.contacts;
  }
  addContact(user: UserInterface, contact: ContactInterface) {
    if (user.contacts.has(contact.phone)) return false;
    user.contacts.set(contact.phone, contact);
    return true;
  }
}

export default new ContactsService();
