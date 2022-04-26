import React, { FC, memo, useCallback, useState } from "react";
import InputWithTitle from "../../../Inputs/InputWithTitle/InputWithTitle";
import Button from "../../../Button/Button";
import DotLoader from "../../../DotLoader/DotLoader";

import contactsStore from "../../../../mobx/contactsStore";
import notificationsStore from "../../../../mobx/notificationsStore";
import { NotificationTypes } from "../../../../types/notifications";

import styles from "./style.module.scss";

interface ModalContentProps {
  closeModal?: () => void;
}

const ModalContent: FC<ModalContentProps> = ({ closeModal }) => {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handlePhoneChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  }, []);

  const handleFirstNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  }, []);

  const handleSecondNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondName(event.currentTarget.value);
  }, []);

  const handleSaveClick = useCallback(async () => {
    setIsSaving(true);
    const responseStatus = await contactsStore.addContact({ phone, firstName, secondName });
    if (responseStatus.isSuccess) {
      closeModal && closeModal();
      notificationsStore.pushNotification("Контакт добавлен успешно!", NotificationTypes.success);
      return;
    }

    if (!responseStatus.isSuccess)
      notificationsStore.pushNotification(responseStatus.message || "Ошибка создания контакта");
    setIsSaving(false);
  }, [phone, firstName, secondName, closeModal]);

  return (
    <div className={styles.modalContent}>
      <div className={styles.modalInputs}>
        <InputWithTitle placeholder={"Телефон"} value={phone} onChange={handlePhoneChange} className={styles.input} />
        <InputWithTitle
          placeholder={"Имя"}
          value={firstName}
          onChange={handleFirstNameChange}
          className={styles.input}
        />
        <InputWithTitle
          placeholder={"Фамилия"}
          value={secondName}
          onChange={handleSecondNameChange}
          className={styles.input}
        />
      </div>
      <Button onClick={handleSaveClick} className={styles.createBtn}>
        {isSaving ? <DotLoader className={styles.loader} /> : `Создать`}
      </Button>
    </div>
  );
};

export default memo(ModalContent);
