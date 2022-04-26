import React, { FC, memo } from "react";

import CloseIcon from "../../../icons/CloseIcon/CloseIcon";

import styles from "./style.module.scss";

interface ModalTitleProps {
  title: string;
  closeModal: () => void;
}

const ModalTitle: FC<ModalTitleProps> = ({ title, closeModal }) => {
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.title}>{title} </div>
      <CloseIcon className={styles.closeIcon} onClick={closeModal} />
    </div>
  );
};

export default memo(ModalTitle);
