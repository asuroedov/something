import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import contactsStore from "../../mobx/contactsStore";

import ContactCard from "../ContactCard/ContactCard";

import { sortContactsByAlphabet } from "../../utils/sortContactsByAlphabet";

import styles from "./style.module.scss";
import AcceptRemoveContactModal from "../Modals/AcceptRemoveContactModal/AcceptRemoveContactModal";

const ContactsList = () => {
  const { contacts, removeContactModalVisible, removingContact } = contactsStore;

  useEffect(() => {
    contactsStore.getContacts();
  }, []);

  return (
    <div className={styles.contactsList}>
      {Array.from(contacts.values())
        .sort(sortContactsByAlphabet)
        .map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      {removeContactModalVisible && (
        <AcceptRemoveContactModal contact={removingContact} closeModal={() => contactsStore.hideRemoveContactModal()} />
      )}
    </div>
  );
};

export default observer(ContactsList);
