import { useEffect, useMemo, useRef, useState } from 'react';

const VISIBLE = 1000;

export default function Time() {
    const [total, setTotal] = useState(10000);
    const [arr, setArr] = useState<number[]>([]);
    const [terms, setTerms] = useState('');
    const [totalTime, setTotalTime] = useState<number | null>(null);
    const [renderCount, setRenderCount] = useState(0);
    const t0 = useRef(0);

    function handleClick() {
        t0.current = performance.now();
        setArr(Array.from({ length: total }, (_, i) => i));
    }

    useEffect(() => {
        if (arr.length === 0) return;
        console.log(`Render + commit (geração): ${(performance.now() - t0.current).toFixed(2)}ms`);
        setTotalTime(performance.now() - t0.current);
    }, [arr]);

    const filtered = useMemo(() => {
        const start = performance.now();
        const result = arr.filter((n) => {
            // trabalho artificial pra deixar o cálculo perceptível
            let x = 0;
            for (let i = 0; i < 3000; i++) x += Math.sqrt(i);
            return String(n).includes(terms);
        });
        console.log(`useMemo recalculou 'filtered' em: ${(performance.now() - start).toFixed(2)}ms`);
        return result;
    }, [arr, terms]);

    const visible = useMemo(() => filtered.slice(0, VISIBLE), [filtered]);

    return (
        <div className="mx-20 flex max-w-300 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4 mt-20">
                <input
                    type="number"
                    min={0}
                    value={total}
                    onChange={(e) => setTotal(Number(e.target.value) || 0)}
                    className="mb-4 px-4 py-2 rounded border border-gray-400"
                />
                <button onClick={handleClick} className="mb-4 px-4 py-2 rounded text-white bg-blue-500">
                    Click to generate
                </button>
                <input
                    type="text"
                    value={terms}
                    placeholder="Filter..."
                    onChange={(e) => setTerms(e.target.value)}
                    className="mb-4 px-4 py-2 rounded border border-gray-400"
                />
                <button
                    onClick={() => setRenderCount((c) => c + 1)}
                    className="mb-4 px-4 py-2 rounded text-white bg-green-600"
                >
                    Forçar re-render ({renderCount})
                </button>
            </div>

            {totalTime !== null && (
                <p className="mb-4">
                    Render + commit (geração): {totalTime.toFixed(2)}ms — {filtered.length} itens
                </p>
            )}

            <p className="text-sm text-gray-500 max-w-200">
                Abra o console. Digite no filtro: o log "useMemo recalculou" aparece e demora um pouco
                (trabalho artificial). Clique em "Forçar re-render": o log NÃO deve aparecer — isso prova
                que o useMemo está evitando o recálculo quando as dependências não mudam.
            </p>

            {visible.map((item) => (
                <i key={item}>{item}</i>
            ))}
        </div>
    );
}