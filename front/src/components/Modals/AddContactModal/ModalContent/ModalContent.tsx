import React, { FC, memo, useCallback, useState } from "react";
import InputMask from "react-input-mask";

import InputWithTitle from "../../../Inputs/InputWithTitle/InputWithTitle";
import Button from "../../../Button/Button";
import DotLoader from "../../../DotLoader/DotLoader";

import styles from "./style.module.scss";
import { ContactInterface } from "../../../../types/contacts";

interface ModalContentProps {
  onSubmit: (contact: ContactInterface) => void;
  actionButtonName: string;
  isSaving: boolean;
  contact?: ContactInterface;
}

const ModalContent: FC<ModalContentProps> = ({ onSubmit, actionButtonName, isSaving, contact }) => {
  const [phone, setPhone] = useState(contact?.phone || "");
  const [firstName, setFirstName] = useState(contact?.firstName || "");
  const [secondName, setSecondName] = useState(contact?.secondName || "");

  const handlePhoneChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  }, []);

  const handleFirstNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  }, []);

  const handleSecondNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondName(event.currentTarget.value);
  }, []);

  return (
    <div className={styles.modalContent}>
      <div className={styles.modalInputs}>
        <InputMask mask={"+7\\999 999 99 99"} value={phone} onChange={handlePhoneChange}>
          {
            // @ts-ignore
            () => (
              <InputWithTitle
                placeholder={"Телефон"}
                value={phone}
                onChange={handlePhoneChange}
                className={styles.input}
              />
            )
          }
        </InputMask>

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
      <Button
        onClick={() => onSubmit({ phone, firstName, secondName, id: contact?.id || 0 })}
        className={styles.createBtn}
      >
        {isSaving ? <DotLoader className={styles.loader} /> : `${actionButtonName}`}
      </Button>
    </div>
  );
};

export default memo(ModalContent);
