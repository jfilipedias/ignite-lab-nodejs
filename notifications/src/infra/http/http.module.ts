import { Module } from '@nestjs/common';

import { NotificationsController } from './controller/notifications.controller';
import { SendNotification } from '../../app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
