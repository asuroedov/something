import { IUser } from "../types/IUser";

const users: Map<string, IUser> = new Map([
  ["test1", { login: "test1", password: "121212" }],
  ["test2", { login: "test2", password: "121212" }],
]);

export default users;
