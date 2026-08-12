"use strict";
// String and Date Types
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Brendan", new Date());
// Object Types
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// Optional Properties
function printName(obj) {
    console.log(obj.last?.toUpperCase());
}
