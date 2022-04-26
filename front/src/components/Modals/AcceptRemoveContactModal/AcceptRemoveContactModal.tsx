import React, { FC, memo, useCallback, useState } from "react";
import BaseModal from "../BaseModal/BaseModal";
import ModalTitle from "../ModalTitle/ModalTitle";
import contactsStore from "../../../mobx/contactsStore";
import notificationsStore from "../../../mobx/notificationsStore";
import { NotificationTypes } from "../../../types/notifications";
import { ContactInterface } from "../../../types/contacts";
import Button from "../../Button/Button";

import styles from "./style.module.scss";
import DotLoader from "../../DotLoader/DotLoader";

interface AcceptRemoveContactModalProps {
  closeModal: () => void;
  contact: ContactInterface | null;
}
const AcceptRemoveContactModal: FC<AcceptRemoveContactModalProps> = ({ closeModal, contact }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleAccept = useCallback(async () => {
    if (!contact) return;
    setIsRemoving(true);
    const responseStatus = await contactsStore.removeContact(contact);
    if (responseStatus.isSuccess) {
      closeModal && closeModal();
      notificationsStore.pushNotification("Контакт удален успешно!", NotificationTypes.success);
      return;
    }

    if (!responseStatus.isSuccess)
      notificationsStore.pushNotification(responseStatus.message || "Ошибка удаления контакта");
    setIsRemoving(false);
  }, [closeModal, contact]);

  return (
    <BaseModal closeModal={closeModal}>
      <ModalTitle title={"Вы уверены что хотите удалить контакт?"} closeModal={closeModal} />
      <div className={styles.content}>
        <div className={styles.info}>
          <div>Телефон: {contact?.phone}</div>
          <div>Имя: {contact?.firstName}</div>
          <div>Фамилия: {contact?.secondName}</div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={handleAccept}>{isRemoving ? <DotLoader className={styles.loader} /> : `Подтвердить`}</Button>
          <Button onClick={closeModal}>Отмена</Button>
        </div>
      </div>
    </BaseModal>
  );
};

export default memo(AcceptRemoveContactModal);
