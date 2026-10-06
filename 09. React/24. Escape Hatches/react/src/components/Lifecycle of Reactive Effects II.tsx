import { useState, useEffect } from 'react';

function createConnection(serverUrl: string, roomId: string) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}

type ChatRoomProps = { roomId: string };

function ChatRoom({ roomId }: ChatRoomProps) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <div >
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
          className="my-2 px-2 py-2 rounded border border-gray-400"
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </div>
  );
}

export default function Chat() {
  const [roomId, setRoomId] = useState('general');
  return (
    <div className="m-20 max-w-200">
      <label>
        <b>2. Choose the chat room:{' '}</b>
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
      <hr />
      <ChatRoom roomId={roomId} />
    </div>
  );
}