import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { Notification } from '../../../../app/entities/notification';
import { NotificationsRepository } from '../../../../app/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.value,
        category: notification.category,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
