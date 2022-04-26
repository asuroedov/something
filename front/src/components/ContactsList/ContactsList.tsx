import React, { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import contactsStore from "../../mobx/contactsStore";

import AcceptRemoveContactModal from "../Modals/AcceptRemoveContactModal/AcceptRemoveContactModal";
import ContactCard from "../ContactCard/ContactCard";

import { filterContacts } from "../../utils/filterContacts";

import { sortContactsByAlphabet } from "../../utils/sortContactsByAlphabet";

import styles from "./style.module.scss";

const ContactsList = () => {
  const { removeContactModalVisible, removingContact, searchString } = contactsStore;
  const contacts = toJS(contactsStore.contacts);

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
