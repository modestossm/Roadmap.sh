// 6. this at Runtime in Classes

class MyClass1 {
  name = "MyClass1";

  getName() {
    return this.name;
  }
}

const c = new MyClass1();

const obj = {
  name: "obj",

  getName: c.getName,
};
 
// Prints "obj", not "MyClass1"
console.log(obj.getName());
// By default, the value of this inside a function depends on how the function was called. 
// In this example, because the function was called through the obj reference, its value of this was obj rather than the class instance.


// 6.1 Arrow Functions

class MyClass2 {
  name = "MyClass2";
  getName = () => {
    return this.name;
  };
}
const d = new MyClass2();
const g = c.getName;
// Prints "MyClass2" instead of crashing
console.log(g());

// This has some trade-offs:
// - The this value is guaranteed to be correct at runtime, even for code not checked with TypeScript
// - This will use more memory, because each class instance will have its own copy of each function defined this way
// - You can’t use super.getName in a derived class, because there’s no entry in the prototype chain to fetch the base class method from


// 6.2 this parameters

class MyClass3 {
  name = "MyClass3";
  getName(this: MyClass3) {
    return this.name;
  }
}
const e = new MyClass3();
// OK
c.getName();
 
// Error, would crash
const h = c.getName;
console.log(h());

// This method makes the opposite trade-offs of the arrow function approach:
// - JavaScript callers might still use the class method incorrectly without realizing it
// - Only one function per class definition gets allocated, rather than one per class instance
// - Base method definitions can still be called via super.


// 6.3 this Types
// In classes, a special type called this refers dynamically to the type of the current class. Let’s see how this is useful:

class Box3 {
  contents: string = "";
  set(value: string) { // (method) Box3.set(value: string): this
    this.contents = value;
    return this;
  }
}


// 6.4 this-based type guards
// You can use this is Type in the return position for methods in classes and interfaces. 
// When mixed with a type narrowing (e.g. if statements) the type of the target object would be narrowed to the specified Type.

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  // @ts-ignore  
  children: FileSystemObject[];
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content; // const fso: FileRep
} else if (fso.isDirectory()) {
  fso.children; // const fso: Directory
} else if (fso.isNetworked()) {
  fso.host; // const fso: Networked & FileSystemObject
}