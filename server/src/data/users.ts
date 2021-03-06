import { UserInterface } from "../types/UserInterface";

const users: Map<string, UserInterface> = new Map([
  [
    "test1",
    {
      login: "test1",
      password: "121212",
      contacts: new Map([
        ["+79609999999", { id: 0.124856, phone: "+79609999999", firstName: "firstName", secondName: "secondName" }],
      ]),
    },
  ],
]);

export default users;
