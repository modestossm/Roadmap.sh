let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

const dado1 = "./images/dice1.png";
const dado2 = "./images/dice2.png";
const dado3 = "./images/dice3.png";
const dado4 = "./images/dice4.png";
const dado5 = "./images/dice5.png";
const dado6 = "./images/dice6.png";

const arr = [dado1, dado2, dado3, dado4, dado5, dado6];

const randomArr1 = Math.floor(Math.random() * arr.length);
const randomArr2 = Math.floor(Math.random() * arr.length + 1);


let h1 = document.querySelector("h1");


if((randomArr1 + 1) > randomArr2) {
    h1.innerHTML = "🚩Player 1 Wins!";
} else if((randomArr1 + 1) < randomArr2) {
    h1.innerHTML = "🥇Player 2 Wins!";
} else {
    h1.textContent = "Draw";
}   

img1.src = arr[randomArr1];
img2.src = "./images/dice" + randomArr2 + ".png";
console.log(arr[randomArr1]);