import { Module } from '@nestjs/common';

import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications';
import { ListRecipientNotifications } from '@app/use-cases/list-recipient-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { SendNotification } from '@app/use-cases/send-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { NotificationsController } from './controller/notifications.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    CancelNotification,
    CountRecipientNotifications,
    ListRecipientNotifications,
    ReadNotification,
    SendNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
