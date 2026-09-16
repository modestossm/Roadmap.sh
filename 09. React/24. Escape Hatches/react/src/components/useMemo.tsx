import { useEffect, useMemo, useRef, useState } from 'react';

const TOTAL = 10000;

export default function Time() {
    const [arr, setArr] = useState<number[]>([]);
    const [totalTime, setTotalTime] = useState<number | null>(null);
    const t0 = useRef(0);

    function handleClick() {
        t0.current = performance.now();
        setArr(Array.from({ length: TOTAL }, (_, i) => i));
    }

    useEffect(() => {
        if (arr.length === 0) return;
        console.log(`Render + commit: ${(performance.now() - t0.current).toFixed(2)}ms`);
        setTotalTime(performance.now() - t0.current);
    }, [arr]);

    return (
        <div className="mx-20 flex flex-wrap max-w-300">
            <button onClick={handleClick} className='mt-20 mb-4 px-4 py-2 rounded text-white bg-blue-500'>
                Click to generate
            </button>

            {totalTime !== null && <p className="w-full mb-4">Render + commit: {totalTime.toFixed(2)}ms</p>}
            {arr.map((item, i) => (
                <i key={i}>{item}</i>
            ))}
        </div>
    );
}