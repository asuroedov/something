import { makeAutoObservable } from "mobx";
import { login } from "../api/auth";

class AuthStore {
  token = "";
  userLogin = "";

  constructor() {
    makeAutoObservable(this);
  }

  async login(userLogin: string, password: string) {
    const [data, errorMessage] = await login(userLogin, password);
    if (errorMessage || !data) return false;

    this.token = data.token;
    this.userLogin = data.login;

    return true;
  }
}

export default new AuthStore();
