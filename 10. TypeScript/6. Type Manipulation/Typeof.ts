// Typeof Type Operator
// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

let s = "hello";
let n: typeof s; // let n: string

// Functions:
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>; // type P = { x: number, y: number }