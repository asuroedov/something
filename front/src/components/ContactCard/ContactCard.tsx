import React, { FC, memo, useCallback, useState } from "react";
import { ContactInterface } from "../../types/contacts";
import Avatar from "../Avatar/Avatar";

import styles from "./style.module.scss";
import ChangeContactModal from "../Modals/ChangeContactModal/ChangeContactModal";
import TrashIcon from "../../icons/TrashIcon/TrashIcon";
import contactsStore from "../../mobx/contactsStore";

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

  const handleDeleteContactClick = useCallback(
    (event: React.MouseEvent<SVGElement>) => {
      contactsStore.showRemoveContactModal(contact);
      event.stopPropagation();
    },
    [contact],
  );

  return (
    <>
      <div className={styles.contactCard} onClick={handleContactCardClick}>
        <div className={styles.leftBlock}>
          <Avatar />
          <div className={styles.contactName}>
            {contact.firstName} {contact.secondName}
          </div>
        </div>
        <TrashIcon className={styles.trashIcon} onClick={handleDeleteContactClick} />
      </div>
      {changeContactModalVisible && <ChangeContactModal closeModal={closeModal} contact={contact} />}
    </>
  );
};

export default memo(ContactCard);
