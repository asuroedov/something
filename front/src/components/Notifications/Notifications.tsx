import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";

import NotificationCard from "./NotificationCard/NotificationCard";

import notificationsStore from "../../mobx/notificationsStore";

import styles from "./style.module.scss";

const Notifications = () => {
  const { notifications } = notificationsStore;

  return ReactDOM.createPortal(
    <div className={styles.notificationWrapper}>
      {Array.from(notifications.values()).map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>,
    document.body,
  );
};

export default observer(Notifications);
