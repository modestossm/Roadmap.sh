// 1. Class Members

class Point {
  x = 0;
  y = 0;
}

// As with other locations, the type annotation is optional, but will be an implicit any if not specified.
const pt = new Point();

// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);

const pt2 = new Point();
// pt2.x = "0"; // Error: Type 'string' is not assignable to type 'number'.

// 1.1 --strictPropertyInitialization
// This setting controls whether class fields need to be initialized in the constructor.

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}


// 1.2 readonly
// This prevents assignments to the field outside of the constructor.

class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  err() {
    // this.name = "not ok"; // Error: Cannot assign to 'name' because it is a read-only property.
  }
}
const g = new Greeter();
// g.name = "also not ok"; // Error: Cannot assign to 'name' because it is a read-only property.


// 1.3 Constructors
// Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

class Points1 {
  x: number;
  y: number;
 
  // Normal signature with defaults:
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Points2 {
  x: number = 0;
  y: number = 0;
 
  // Constructor overloads:
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    // Code logic here
  }
}


// 1.4 Methods
// Methods can use all the same type annotations as functions and constructors:

class Point2 {
  x = 10;
  y = 10;
 
  scale(n: number): void {
    this.x *= n;
    // y *= n; // Error: Cannot find name 'y'. Did you mean the instance member 'this.y'?
  }
}


// 1.5 Getters / Setters
// Classes can also have accessors:

class C {
  _length = 0;

  // If get exists but no set, the property is automatically readonly
  get length() {
    return this._length;
  }

  // If the type of the setter parameter is not specified, it is inferred from the return type of the getter
  set length(value) {
    this._length = value;
  }
}


// 1.6 Index Signatures
// Classes can declare index signatures; these work the same as Index Signatures for other object types:

class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
 
  check(s: string) {
    return this[s] as boolean;
  }
}
