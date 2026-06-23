import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = parseInt(Math.random() * 10);

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1 style={{color: "orangered"}}>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>

    <p>Created by {fName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
