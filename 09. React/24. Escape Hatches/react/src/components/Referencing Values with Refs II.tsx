import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current ?? undefined);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current ?? undefined);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1 className="mx-20 mt-10">Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart} className="ms-20 me-2  mt-2 px-4 py-2 rounded text-white bg-blue-500">
        Start
      </button>
      <button onClick={handleStop} className="ms-2 mt-2 px-4 py-2 rounded text-white bg-blue-500">
        Stop
      </button>
    </>
  );
}