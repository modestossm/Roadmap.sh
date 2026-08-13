// String and Date Types
function greet (person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
} 
 
greet("Brendan", new Date());

// Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties
function printName(obj: { first: string; last?: string }) {
  console.log(obj.last?.toUpperCase());
}

//Union Types
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// Type Aliases
type Point = {
  x: number;
  y: number;
};
 
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

// Union Types + Type Aliases
type ID = number | string;