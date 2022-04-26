import React, { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import ContactsList from "../../components/ContactsList/ContactsList";
import CircleButton from "../../components/CircleButton/CircleButton";
import AddContactModal from "../../components/Modals/AddContactModal/AddContactModal";
import SearchInput from "../../components/Inputs/SearchInput/SearchInput";

import { config } from "../../utils/config";

import styles from "./style.module.scss";

const ContactsPage = () => {
  const [modalVisible, setModelVisible] = useState(false);

  const closeModal = useCallback(() => {
    setModelVisible(false);
  }, []);

  const handleAddContactClick = useCallback(() => {
    setModelVisible(true);
  }, []);

  if (!sessionStorage.getItem(config.JWT_TOKEN_KEY_FOR_STORAGE)) return <Navigate to={"/"} />;
  return (
    <div className={styles.contactPage}>
      <SearchInput />
      <ContactsList />
      <CircleButton onClick={handleAddContactClick} className={styles.addBtn} />
      {modalVisible && <AddContactModal closeModal={closeModal} />}
    </div>
  );
};

export default ContactsPage;
