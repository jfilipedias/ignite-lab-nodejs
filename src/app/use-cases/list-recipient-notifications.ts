import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface ListRecipientNotificationsRequest {
  recipientId: string;
}

interface ListRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class ListRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ListRecipientNotificationsRequest,
  ): Promise<ListRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
