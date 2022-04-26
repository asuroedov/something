import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";
import contactsStore from "../../mobx/contactsStore";

import styles from "./style.module.scss";

const ContactsList = () => {
  const { contacts } = contactsStore;

  useEffect(() => {
    contactsStore.getContacts();
  }, []);

  return (
    <div>
      {Array.from(contacts.values()).map((contact) => (
        <div key={contact.phone}>
          {contact.phone} {contact.firstName} {contact.secondName}
        </div>
      ))}
    </div>
  );
};

export default observer(ContactsList);
