import generateName from "sillyName";
import superheroes from "superheroes";

// let generateName = require('sillyname');
let sillyName = generateName();
console.log("The name is " + sillyName);

let random = Math.floor(Math.random() * superheroes.length);
let name = superheroes[random];
console.log("I am " + name + " Superhero!");
console.log(random);