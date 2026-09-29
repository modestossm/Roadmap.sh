// 7.1 Parameter Properties

class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a.x); // (property) Params.x: number
// console.log(a.z); // Error: Property 'z' is private and only accessible within class 'Params'.


// 7.2 Class Expressions

const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass("Hello, world"); // const m: someClass<string>


// 7.3 Constructor Signatures
// JavaScript classes are instantiated with the new operator. 
// Given the type of a class itself, the InstanceType utility type models this operation.

class Point {
  createdAt: number;
  x: number;
  y: number
  constructor(x: number, y: number) {
    this.createdAt = Date.now()
    this.x = x;
    this.y = y;
  }
}
type PointInstance = InstanceType<typeof Point>
 
function moveRight(point: PointInstance) {
  point.x += 5;
}
 
const point = new Point(3, 4);
moveRight(point);
point.x; // => 8