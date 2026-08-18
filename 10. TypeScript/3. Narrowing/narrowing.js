"use strict";
// typeof type guards
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       // Error: 'strs' is possibly 'null'. Null and Array are objects in JS.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }
// Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        // if the numUsersOnline exist, so the numUsersOnline is true. Otherwise, if the value is null, this is false
        // We can apply this in the function above to remove the error
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
function printAll(strs) {
    if (strs && typeof strs === "object") {
        // if the strs exist (not null) and is an onbject, do something
        // This verification separete the null (object) from array (object)
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
// Equality narrowing
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValue(container, factor) {
    // Remove both 'null' and 'undefined' from the type. The != operator checks whether a value is either null or undefined.
    if (container.value != null) {
        console.log(container.value);
        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        // The 'in' operator verifies if the animal contain the 'swin' 
        return animal.swim();
    }
    return animal.fly();
}
// instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Assignments
let x = Math.random() < 0.5 ? 10 : "hello world!"; //let x: string | number
x = 1; // let x: number
console.log(x);
// x = true; // Error: Type 'boolean' is not assignable to type 'string | number'. 
console.log(x);
// Control flow analysis
function example2() {
    let x;
    x = Math.random() < 0.5;
    console.log(x); //let x: boolean
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x); //let x: string
    }
    else {
        x = 100;
        console.log(x); //let x: number
    }
    return x; // let x: string | number
}
