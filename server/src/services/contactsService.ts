import { UserInterface } from "../types/UserInterface";
import { ContactInterface } from "../types/ContactInterface";
import { RequestError } from "../errors/requestError";

class ContactsService {
  getContacts(user: UserInterface) {
    return user.contacts;
  }
  addContact(user: UserInterface, contact: ContactInterface) {
    if (user.contacts.has(contact.phone)) return false;
    if (!contact.phone || !contact.firstName || !contact.secondName)
      throw new RequestError(400, "Контакт не должен содержать пустых полей!");

    const id = Math.random();
    user.contacts.set(contact.phone, { ...contact, id });
    return { ...contact, id };
  }

  changeContact(user: UserInterface, contact: ContactInterface, prevNumber: string) {
    if (!user.contacts.has(prevNumber)) return false;
    if (!contact.phone || !contact.firstName || !contact.secondName)
      throw new RequestError(400, "Контакт не должен содержать пустых полей!");

    user.contacts.delete(prevNumber);
    user.contacts.set(contact.phone, contact);
    return true;
  }

  deleteContact(user: UserInterface, phoneNumber: string) {
    return user.contacts.delete(phoneNumber);
  }
}

export default new ContactsService();
