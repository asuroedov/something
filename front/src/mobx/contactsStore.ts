import { makeAutoObservable } from "mobx";
import { ContactInterface } from "../types/contacts";
import { addContact, getContacts } from "../api/contact";

type PHONE = string;

class ContactsStore {
  contacts: Map<PHONE, ContactInterface> = new Map();

  constructor() {
    makeAutoObservable(this);
  }

  async addContact(contact: ContactInterface) {
    const [data, errorMessage] = await addContact(contact);
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    this.contacts.set(contact.phone, contact);
    return { isSuccess: true };
  }

  async getContacts() {
    const [data, errorMessage] = await getContacts();
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    data.contacts.forEach((contact) => this.contacts.set(contact.phone, contact));
    return { isSuccess: true };
  }
}

export default new ContactsStore();
