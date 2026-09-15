import { useRef } from "react";

export default function Form() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    return (
        <>  
            <div>
                <input ref={inputRef} className="my-20 ms-20 rounded border-2 border-cyan-900" />
                <button onClick={handleClick} className="mx-2 mt-2 px-4 py-2 rounded text-white bg-blue-500">
                    Focus the input
                </button>
            </div>
        </>
    );
}