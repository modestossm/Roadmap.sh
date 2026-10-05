import { useState, useEffect } from 'react';

const serverUrl = 'https://localhost:1234';

function createConnection(serverUrl: string, roomId: string) {

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
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function Lifecycle() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <div className="m-20 max-w-200">
      <label>
        <b>1. Choose the chat room:{' '}</b>
        <select value={roomId} onChange={e => setRoomId(e.target.value)} 
        className='mx-2 mb-2 px-4 py-2 rounded text-white bg-blue-500'>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)} className='mx-4 mb-2 px-4 py-2 rounded text-white bg-blue-500'>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}