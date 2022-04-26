import { makeAutoObservable } from "mobx";
import { NotificationInterface, NotificationTypes } from "../types/notifications";

type ID = number;

class NotificationStore {
  notifications: Map<ID, NotificationInterface> = new Map();

  constructor() {
    makeAutoObservable(this);
  }

  pushNotification(message: string, type = NotificationTypes.error, hideTime = 5000) {
    const id = Math.random();

    this.notifications.set(id, { id, message, type, hideTime });
    setTimeout(() => {
      this.notifications.delete(id);
    }, hideTime);
  }
}

export default new NotificationStore();
