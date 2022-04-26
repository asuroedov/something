import { makeAutoObservable } from "mobx";
import { login } from "../api/auth";
import { config } from "../utils/config";

class AuthStore {
  token = "";
  userLogin = "";

  constructor() {
    makeAutoObservable(this);
  }

  async login(userLogin: string, password: string) {
    const [data, errorMessage] = await login(userLogin, password);
    if (errorMessage || !data) return { isSuccess: false, message: errorMessage };

    this.token = data.token;
    this.userLogin = data.login;
    sessionStorage.setItem(config.JWT_TOKEN_KEY_FOR_STORAGE, data.token);

    return { isSuccess: true };
  }
}

export default new AuthStore();
