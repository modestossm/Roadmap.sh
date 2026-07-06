import React from "react";
import Card from "./Card";

function createCard(emoji) {
    return (
        <Card 
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
    );
}

export default createCard;