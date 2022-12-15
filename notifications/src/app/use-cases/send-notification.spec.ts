import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      content: 'Você recebeu uma solicitação de amizade.',
      recipientId: 'exemple-recipient-id',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
