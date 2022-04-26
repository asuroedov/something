import React, { useCallback, useState } from "react";

import ContactsList from "../../components/ContactsList/ContactsList";

import styles from "./style.module.scss";
import CircleButton from "../../components/CircleButton/CircleButton";
import AddContactModal from "../../components/Modals/AddContactModal/AddContactModal";

const ContactsPage = () => {
  const [modalVisible, setModelVisible] = useState(false);

  const closeModal = useCallback(() => {
    setModelVisible(false);
  }, []);

  const handleAddContactClick = useCallback(() => {
    setModelVisible(true);
  }, []);

  return (
    <div className={styles.contactPage}>
      <ContactsList />
      <CircleButton onClick={handleAddContactClick} className={styles.addBtn} />
      {modalVisible && <AddContactModal closeModal={closeModal} />}
    </div>
  );
};

export default ContactsPage;
