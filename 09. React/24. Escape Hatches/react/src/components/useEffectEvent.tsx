import { useState, useEffect } from 'react';
import { useEffectEvent } from 'react';

function showNotification(message: string, theme: string) {
  console.log(`Notification (${theme}): ${message}`);
}

export function createConnection(serverUrl: string, roomId: string) {
  let connectedCallback: (() => void) | undefined;
  let timeout: ReturnType<typeof setTimeout>;
  
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event: string, callback: () => void) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    }
  };
}

const serverUrl = 'https://localhost:1234';

type ChatRoomProps = {
  roomId: string;
  theme: string;
};

function ChatRoom({ roomId, theme }: ChatRoomProps) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function EffectEvent() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="m-20 max-w-200">
      <label>
        <b>3. Choose the chat room:{' '}</b>
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
          className="mx-2 mb-4 px-4 py-2 rounded text-white bg-blue-500"
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
          className="ms-4 me-2 my-2 px-2 py-2 rounded border border-gray-400"
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'}
      />
    </div>
  );
}
