"use strict";
// Function Type Expressions
function greeter(fn) {
    // The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”.
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);
function fn(ctor) {
    // Passing an argument of type `number` to `ctor` matches it against
    // the first definition in the `CallOrConstruct` interface.
    console.log(ctor(10));
    // Similarly, passing an argument of type `string` to `ctor` matches it
    // against the second definition in the `CallOrConstruct` interface.
    console.log(new ctor("10/20/30"));
}
fn(Date);
// Generic Functions
function map(arr, func) {
    // TypeScript could infer both the type of the Input type parameter (from the given string array), 
    // as well as the Output type parameter based on the return value of the function expression (number).
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// Generic Functions - Constraints
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [1, 2, 3]); // longerArray is of type 'number[]'
const longerString = longest("alice", "bob"); // longerString is of type 'alice' | 'bob'
// const notOK = longest(10, 100); // Error TS2345: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'
// Guidelines for Writing Good Generic Functions
// 1. Push Type Parameters Down
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
