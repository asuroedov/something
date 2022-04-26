import React, { FC, memo, useCallback, useState } from "react";
import { ContactInterface } from "../../types/contacts";
import Avatar from "../Avatar/Avatar";

import styles from "./style.module.scss";
import ChangeContactModal from "../Modals/ChangeContactModal/ChangeContactModal";

interface ContactCardProps {
  contact: ContactInterface;
}

const ContactCard: FC<ContactCardProps> = ({ contact }) => {
  const [changeContactModalVisible, setChangeContactModalVisible] = useState(false);

  const closeModal = useCallback(() => {
    setChangeContactModalVisible(false);
  }, []);

  const handleContactCardClick = useCallback(() => {
    setChangeContactModalVisible(true);
  }, []);

  return (
    <>
      <div className={styles.contactCard} onClick={handleContactCardClick}>
        <Avatar />
        <div className={styles.contactName}>
          {contact.firstName} {contact.secondName}
        </div>
      </div>
      {changeContactModalVisible && <ChangeContactModal closeModal={closeModal} contact={contact} />}
    </>
  );
};

export default memo(ContactCard);
