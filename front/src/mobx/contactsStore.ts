import { makeAutoObservable } from "mobx";
import { ContactInterface } from "../types/contacts";
import { addContact, changeContact, getContacts } from "../api/contact";

type ID = number;

class ContactsStore {
  contacts: Map<ID, ContactInterface> = new Map();

  constructor() {
    makeAutoObservable(this);
  }

  async addContact(contact: ContactInterface) {
    const [data, errorMessage] = await addContact(contact);
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    this.contacts.set(contact.id, contact);
    return { isSuccess: true };
  }

  async getContacts() {
    const [data, errorMessage] = await getContacts();
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    data.contacts.forEach((contact) => this.contacts.set(contact.id, contact));
    return { isSuccess: true };
  }

  async changeContact(contact: ContactInterface, prevNumber: string) {
    const [data, errorMessage] = await changeContact(contact, prevNumber);
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    this.contacts.set(contact.id, contact);
    return { isSuccess: true };
  }
}

export default new ContactsStore();
