export enum NotificationTypes {
  error = "error",
  warn = "warn",
  success = "success",
}

export interface NotificationInterface {
  id: number;
  message: string;
  type: NotificationTypes;
  hideTime: number;
}
