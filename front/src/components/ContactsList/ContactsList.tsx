import React, { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";

import contactsStore from "../../mobx/contactsStore";

import ContactCard from "../ContactCard/ContactCard";

import { sortContactsByAlphabet } from "../../utils/sortContactsByAlphabet";

import styles from "./style.module.scss";
import AcceptRemoveContactModal from "../Modals/AcceptRemoveContactModal/AcceptRemoveContactModal";
import { filterContacts } from "../../utils/filterContacts";

const ContactsList = () => {
  const { contacts, removeContactModalVisible, removingContact, searchString } = contactsStore;

  useEffect(() => {
    contactsStore.getContacts();
  }, []);

  const filteredContacts = useMemo(() => {
    return filterContacts(Array.from(contacts.values()), searchString);
  }, [contacts, searchString]);

  return (
    <div className={styles.contactsList}>
      {filteredContacts.sort(sortContactsByAlphabet).map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
      {removeContactModalVisible && (
        <AcceptRemoveContactModal contact={removingContact} closeModal={() => contactsStore.hideRemoveContactModal()} />
      )}
    </div>
  );
};

export default observer(ContactsList);
