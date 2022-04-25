import { NextFunction, Request, Response } from "express";
import { RequestError } from "../errors/requestError";

export function syncErrorMiddleware<ERROR extends Error>(
  error: ERROR,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof RequestError) return response.status(error.status).json({ message: error.message });
  response.status(500).json({ message: "some error" });
}
