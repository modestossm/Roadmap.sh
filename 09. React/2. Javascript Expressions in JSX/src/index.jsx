import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = parseInt(Math.random() * 10);

const currentDate = new Date();
const year = currentDate.getFullYear();

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  maxWidth: "10rem",
  backgroundColor: "coral"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello {fName + " " + lName}!</h1>
    <p style={{color: "orangered"}}>Your lucky number is {num}</p>

    <p>Created by {fName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
