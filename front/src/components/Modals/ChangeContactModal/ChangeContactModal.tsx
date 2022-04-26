import React, { FC, memo, useCallback, useState } from "react";
import BaseModal from "../BaseModal/BaseModal";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalContent from "../AddContactModal/ModalContent/ModalContent";
import contactsStore from "../../../mobx/contactsStore";
import notificationsStore from "../../../mobx/notificationsStore";
import { NotificationTypes } from "../../../types/notifications";
import { ContactInterface } from "../../../types/contacts";

interface ChangeContactModalProps {
  closeModal: () => void;
  contact: ContactInterface;
}

const ChangeContactModal: FC<ChangeContactModalProps> = ({ closeModal, contact }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleChangeClick = useCallback(
    async (newContactData: ContactInterface) => {
      setIsSaving(true);
      const responseStatus = await contactsStore.changeContact(newContactData, contact.phone);
      if (responseStatus.isSuccess) {
        notificationsStore.pushNotification("Контакт изменен успешно!", NotificationTypes.success);
      }

      if (!responseStatus.isSuccess)
        notificationsStore.pushNotification(responseStatus.message || "Ошибка редактирования контакта");
      setIsSaving(false);
    },
    [contact.phone],
  );

  return (
    <BaseModal closeModal={closeModal}>
      <ModalTitle title={"Редактирование контакта"} closeModal={closeModal} />
      <ModalContent
        onSubmit={handleChangeClick}
        isSaving={isSaving}
        actionButtonName={"Редактировать контакт"}
        contact={contact}
      />
    </BaseModal>
  );
};

export default memo(ChangeContactModal);
