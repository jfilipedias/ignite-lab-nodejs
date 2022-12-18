import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications';
import { ListRecipientNotifications } from '@app/use-cases/list-recipient-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { SendNotification } from '@app/use-cases/send-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { HttpNotificationMapper } from '../mappers/http-notification-mapper';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private countRecipientNotifications: CountRecipientNotifications,
    private listRecipientNotifications: ListRecipientNotifications,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private sendNotification: SendNotification,
    private unreadNotification: UnreadNotification,
  ) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: HttpNotificationMapper.toHttp(notification),
    };
  }

  @Get('recipient/:id')
  async listByRecipient(@Param('id') recipientId: string) {
    const { notifications } = await this.listRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(HttpNotificationMapper.toHttp),
    };
  }

  @Get('recipient/:id/count')
  async countByRecipient(@Param('id') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return { count };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id });
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }
}
