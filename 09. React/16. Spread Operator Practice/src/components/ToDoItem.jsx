import React from "react";

export default function ToDoItem(props) {
    const [isDone, setIsDone] = React.useState(false);

    function handleClick(preValue) {
        setIsDone(preValue => !preValue);
    }

    return (
        <div onClick={handleClick} onDoubleClick={() => props.dbClick(props.id)}>
            <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
        </div>
    );
}