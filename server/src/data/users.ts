import { UserInterface } from "../types/UserInterface";

const users: Map<string, UserInterface> = new Map([
  ["test1", { login: "test1", password: "121212", contacts: new Map() }],
  ["test2", { login: "test2", password: "121212", contacts: new Map() }],
]);

export default users;
