import { IUser } from "../types/IUser";
import users from "../data/users";

class UserService {
  users: Map<string, IUser> = new Map();

  constructor(users: Map<string, IUser>) {
    this.users = users;
  }

  findUser(login: string) {
    return this.users.get(login);
  }
}

export default new UserService(users);
