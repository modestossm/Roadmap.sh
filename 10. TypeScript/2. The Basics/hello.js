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
//Union Types
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord3({ x: 100, y: 100 });
// Type Assertions
const myCanvas = document.getElementById("main_canvas");
//const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
// Literal Types
function printText(s, alignment) {
    console.log(s, alignment);
}
printText("Hello, world", "left");
// erro no 'centre' --> printText("G'day, mate", "centre");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
