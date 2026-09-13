import { useRef } from "react";

export default function Counter() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert("You clicked " + ref.current + " times!");
    }

    return (
        <>
            <button onClick={handleClick} className="mx-20 mt-20 px-4 py-2 rounded bg-blue-500"> 
                Click me!
            </button>

            <p className="mx-20 mt-2">You clicked {ref.current} times!</p>
        </>
    );
};