import React, { FC, memo } from "react";
import BaseModal from "../BaseModal/BaseModal";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalContent from "./ModalContent/ModalContent";

interface AddContactModalProps {
  closeModal: () => void;
}
const AddContactModal: FC<AddContactModalProps> = ({ closeModal }) => {
  return (
    <BaseModal closeModal={closeModal}>
      <ModalTitle title={"Создание нового контакта"} closeModal={closeModal} />
      <ModalContent closeModal={closeModal} />
    </BaseModal>
  );
};

export default memo(AddContactModal);
