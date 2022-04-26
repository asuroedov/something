import React, { FC, memo, useCallback, useState } from "react";
import BaseModal from "../BaseModal/BaseModal";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalContent from "./ModalContent/ModalContent";
import contactsStore from "../../../mobx/contactsStore";
import notificationsStore from "../../../mobx/notificationsStore";
import { NotificationTypes } from "../../../types/notifications";
import { ContactInterface } from "../../../types/contacts";
import { removeExtraPhoneSpaces } from "../../../utils/removeExtraPhoneSpaces";

interface AddContactModalProps {
  closeModal: () => void;
}
const AddContactModal: FC<AddContactModalProps> = ({ closeModal }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveClick = useCallback(
    async (contact: ContactInterface) => {
      setIsSaving(true);
      const responseStatus = await contactsStore.addContact(removeExtraPhoneSpaces(contact));
      if (responseStatus.isSuccess) {
        closeModal && closeModal();
        notificationsStore.pushNotification("Контакт добавлен успешно!", NotificationTypes.success);
        return;
      }

      if (!responseStatus.isSuccess)
        notificationsStore.pushNotification(responseStatus.message || "Ошибка создания контакта");
      setIsSaving(false);
    },
    [closeModal],
  );

  return (
    <BaseModal closeModal={closeModal}>
      <ModalTitle title={"Создание нового контакта"} closeModal={closeModal} />
      <ModalContent onSubmit={handleSaveClick} isSaving={isSaving} actionButtonName={"Создать"} />
    </BaseModal>
  );
};

export default memo(AddContactModal);
