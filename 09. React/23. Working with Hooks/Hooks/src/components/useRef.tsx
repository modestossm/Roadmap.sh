import { useRef } from "react";

export default function Focus() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current) {
        inputRef.current.focus();
        }
    };

    return (
        <div>
        <p>Clique no botão para colocar o cursor dentro do campo de texto e dar foco:</p>
        <input ref={inputRef} type="text" placeholder="Enter text" /> <br /><br />
        <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}  
  
  
