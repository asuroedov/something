import * as jwt from "jsonwebtoken";
import { RequestError } from "../errors/requestError";
import UserService from "./userService";
import userService from "./userService";

class AuthService {
  private userService: typeof UserService;

  constructor(userService: typeof UserService) {
    this.userService = userService;
  }

  login(payload: { login: string; password: string }) {
    const { login, password } = payload;

    const user = userService.findUser(login);
    if (!user) throw new RequestError(404, "пользователь не найден");

    const passwordIsValid = user.password === password;
    if (!passwordIsValid) throw new RequestError(400, "пароль или логин неверны");

    const jwtKey: string = process.env.JWT_KEY;

    const token = jwt.sign({ login }, jwtKey, { expiresIn: "24h" });

    return { user, token };
  }
}

export default new AuthService(userService);
