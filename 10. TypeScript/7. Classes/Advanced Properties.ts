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


// 7.4 abstract Classes and Members
// An abstract method or abstract field is one that hasn’t had an implementation provided. 
// These members must exist inside an abstract class, which cannot be directly instantiated.

abstract class BaseA {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
// const b = new BaseA(); // Error: Cannot create an instance of an abstract class.

// We can’t instantiate Base with new because it’s abstract.
// Instead, we need to make a derived class and implement the abstract members:

class Derived extends BaseA {
  getName() {
    return "world";
  }
}
 
const t = new Derived();
t.printName();


// 7.5 Relationships Between Classes
// In most cases, classes in TypeScript are compared structurally, the same as other types.
//For example, these two classes can be used in place of each other because they’re identical:

class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}
 
// OK
const p1: Point1 = new Point2();

// Similarly, subtype relationships between classes exist even if there’s no explicit inheritance:

class Person {
  // @ts-ignore 
  name: string;
  // @ts-ignore 
  age: number;
}
 
class Employee {
  // @ts-ignore 
  name: string;
  // @ts-ignore 
  age: number;
  // @ts-ignore 
  salary: number;
}
 
// OK
const p2: Person = new Employee();