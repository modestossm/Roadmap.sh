import React from "react";

export default function InputArea(props) {
    const [inputText, setInputText] = React.useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setInputText(newValue);
    };

    return (
        <div>
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={() => {
                    props.onAdd(inputText);
                    setInputText("")
                }}> 
                <span>Add</span> 
            </button>
        </div>
    );
}