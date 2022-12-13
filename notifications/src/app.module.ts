import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [PrismaService],
})
export class AppModule {}
