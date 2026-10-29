import Messages from '@/components/messages';
import { getMessagesFromBackend } from '@/lib/messages';

export default async function MessagesPage() {
  const messages = await getMessagesFromBackend('page');

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
