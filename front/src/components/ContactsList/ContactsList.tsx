import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";
import contactsStore from "../../mobx/contactsStore";

import styles from "./style.module.scss";
import ContactCard from "../ContactCard/ContactCard";

const ContactsList = () => {
  const { contacts } = contactsStore;

  useEffect(() => {
    contactsStore.getContacts();
  }, []);

  return (
    <div className={styles.contactsList}>
      {Array.from(contacts.values()).map((contact) => (
        <ContactCard key={contact.phone} {...contact} />
      ))}
    </div>
  );
};

export default observer(ContactsList);
