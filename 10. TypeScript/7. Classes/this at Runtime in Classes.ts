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