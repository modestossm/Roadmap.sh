import React from "react";
import Note from "./note";

function creatNote(note) {
    return (
        <Note 
            key={note.key}
            title={note.title}
            content={note.content}
        />
    );
}

export default creatNote;