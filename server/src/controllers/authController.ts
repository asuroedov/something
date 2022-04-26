import { NextFunction, Request, Response } from "express";
import authService from "../services/authService";

export async function login(
  request: Request<{}, {}, { login: string; password: string }, {}>,
  response: Response,
  next: NextFunction,
) {
  try {
    const { login, password } = request.body;

    const { token } = authService.login({ login, password });

    response.json({ message: "successful", token, login });
  } catch (e) {
    next(e);
  }
}
