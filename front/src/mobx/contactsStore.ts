import { makeAutoObservable } from "mobx";
import { ContactInterface } from "../types/contacts";
import { addContact, changeContact, getContacts, removeContact } from "../api/contact";

type ID = number;

class ContactsStore {
  contacts: Map<ID, ContactInterface> = new Map();
  searchString = "";

  removeContactModalVisible = false;
  removingContact: ContactInterface | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async addContact(contact: ContactInterface) {
    const [data, errorMessage] = await addContact(contact);
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    this.contacts.set(data.contact.id, data.contact);
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

  async removeContact(contact: ContactInterface) {
    const [data, errorMessage] = await removeContact(contact.phone);
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    this.contacts.delete(contact.id);
    return { isSuccess: true };
  }

  hideRemoveContactModal() {
    this.removeContactModalVisible = false;
    this.removingContact = null;
  }
  showRemoveContactModal(contact: ContactInterface) {
    this.removingContact = contact;
    this.removeContactModalVisible = true;
  }

  setSearchString(search: string) {
    this.searchString = search;
  }
}

export default new ContactsStore();
