import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'recipient-id',
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    ...override,
  });
}
