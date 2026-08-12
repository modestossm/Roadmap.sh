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