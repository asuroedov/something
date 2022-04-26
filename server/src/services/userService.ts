import { UserInterface } from "../types/UserInterface";
import users from "../data/users";

class UserService {
  users: Map<string, UserInterface> = new Map();

  constructor(users: Map<string, UserInterface>) {
    this.users = users;
  }

  findUser(login: string) {
    return this.users.get(login);
  }
}

export default new UserService(users);
