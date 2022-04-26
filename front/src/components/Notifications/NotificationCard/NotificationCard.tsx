import React, { FC, memo, useEffect, useState } from "react";

import { NotificationInterface } from "../../../types/notifications";

import styles from "./style.module.scss";
import cn from "classnames";

interface NotificationCardProps extends NotificationInterface {}

const NotificationCard: FC<NotificationCardProps> = ({ message, type, hideTime }) => {
  const [isStartedHide, setStartHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartHide(true);
    }, hideTime - 500);
  }, [hideTime]);

  return (
    <div
      className={cn(styles.notificationCard, {
        [styles.success]: type === "success",
        [styles.startHide]: isStartedHide,
      })}
    >
      {message}
    </div>
  );
};

export default memo(NotificationCard);
