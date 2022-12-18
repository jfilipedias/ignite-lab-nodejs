import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract findById(notificationId: string): Promise<Notification | null>;

  abstract create(notification: Notification): Promise<void>;

  abstract save(notification: Notification): Promise<void>;
}
