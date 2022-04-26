import axios from "axios";
import { LoginResponse } from "../types/auth";
import { errorHandler } from "../utils/errorHandler";
import { config } from "../utils/config";

const BASE_URL = config.BASE_URL;
const route = "auth/";

export async function login(login: string, password: string) {
  return await errorHandler<LoginResponse>(() => axios.post(`${BASE_URL}${route}login`, { login, password }));
}
