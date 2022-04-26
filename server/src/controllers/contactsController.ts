import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { RequestError } from "../errors/requestError";
import userService from "../services/userService";
import contactsService from "../services/contactsService";
import { ContactInterface } from "../types/ContactInterface";

export async function getContacts(request: Request<{}, {}, {}, {}>, response: Response, next: NextFunction) {
  try {
    const { token } = request.headers;
    const { login } = jwt.verify(token, process.env.JWT_KEY);

    const user = userService.findUser(login);
    if (!user) throw new RequestError(404, "ошибка авторизации");

    const contacts = contactsService.getContacts(user);

    response.json({ message: "successful", contacts: Array.from(contacts.values()) });
  } catch (e) {
    next(e);
  }
}

export async function addContact(
  request: Request<{}, {}, { contact: ContactInterface }, {}>,
  response: Response,
  next: NextFunction,
) {
  try {
    const { token } = request.headers;
    const { contact } = request.body;
    const { login } = jwt.verify(token, process.env.JWT_KEY);

    const user = userService.findUser(login);
    if (!user) throw new RequestError(404, "ошибка авторизации");

    const isSuccessful = contactsService.addContact(user, contact);
    if (!isSuccessful) throw new RequestError(400, "контакт с таким номером уже существует");

    response.json({ message: "successful", contact });
  } catch (e) {
    next(e);
  }
}

export async function changeContact(
  request: Request<{}, {}, { contact: ContactInterface; prevNumber: string }, {}>,
  response: Response,
  next: NextFunction,
) {
  try {
    const { token } = request.headers;
    const { contact, prevNumber } = request.body;
    const { login } = jwt.verify(token, process.env.JWT_KEY);

    const user = userService.findUser(login);
    if (!user) throw new RequestError(404, "ошибка авторизации");

    const isSuccessful = contactsService.changeContact(user, contact, prevNumber);
    if (!isSuccessful) throw new RequestError(400, "не удалось редактировать контакт");

    response.json({ message: "successful", contact });
  } catch (e) {
    next(e);
  }
}
