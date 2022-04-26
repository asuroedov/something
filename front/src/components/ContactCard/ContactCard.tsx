import React, { FC, memo } from "react";
import { ContactInterface } from "../../types/contacts";
import Avatar from "../Avatar/Avatar";

import styles from "./style.module.scss";

interface ContactCardProps extends ContactInterface {}

const ContactCard: FC<ContactCardProps> = ({ phone, secondName, firstName }) => {
  return (
    <div className={styles.contactCard}>
      <Avatar />
      <div className={styles.contactName}>
        {firstName} {secondName}
      </div>
    </div>
  );
};

export default memo(ContactCard);
