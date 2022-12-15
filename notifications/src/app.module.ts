import { Module } from '@nestjs/common';
import { NotificationsController } from './infra/notifications.controller';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [PrismaService],
})
export class AppModule {}
