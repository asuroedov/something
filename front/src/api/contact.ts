import axios from "axios";
import { errorHandler } from "../utils/errorHandler";
import { config } from "../utils/config";
import { ContactInterface } from "../types/contacts";

const BASE_URL = config.BASE_URL;
const route = "contacts";

export async function addContact(contact: ContactInterface) {
  const token = sessionStorage.getItem(config.JWT_TOKEN_KEY_FOR_STORAGE) || "";

  return await errorHandler<{ message: string; contact: ContactInterface }>(() =>
    axios.post(`${BASE_URL}${route}`, { contact }, { headers: { token } }),
  );
}

export async function getContacts() {
  const token = sessionStorage.getItem(config.JWT_TOKEN_KEY_FOR_STORAGE) || "";

  return await errorHandler<{ message: string; contacts: ContactInterface[] }>(() =>
    axios.get(`${BASE_URL}${route}`, { headers: { token } }),
  );
}

export async function changeContact(contact: ContactInterface, prevNumber: string) {
  const token = sessionStorage.getItem(config.JWT_TOKEN_KEY_FOR_STORAGE) || "";

  return await errorHandler<{ message: string; contact: ContactInterface }>(() =>
    axios.put(`${BASE_URL}${route}`, { contact, prevNumber }, { headers: { token } }),
  );
}

export async function removeContact(phone: string) {
  const token = sessionStorage.getItem(config.JWT_TOKEN_KEY_FOR_STORAGE) || "";

  return await errorHandler<{ message: string; contact: ContactInterface }>(() =>
    axios.delete(`${BASE_URL}${route}/${phone}`, { headers: { token } }),
  );
}
