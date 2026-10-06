// --------------- Custom Hook ---------------
import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}


// --------------- Components ---------------
function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick} className='mt-20 mb-2 px-4 py-2 rounded text-white bg-blue-500'>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function OnlineStatus() {
  return (
    <div className="m-20 max-w-200">
      <SaveButton />
      <StatusBar />
    </div>
  );
}
