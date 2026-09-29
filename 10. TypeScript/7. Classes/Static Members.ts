// 4. Static Members
// The static members aren’t associated with a particular instance of the class.
// They can be accessed through the class constructor object itself:

class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();


// 4.1 Special Static Names
// Function properties like name, length, and call aren’t valid to define as static members

class S {
  static name = "S!"; // Error: Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
}
// P.S. In the 7.0 version of the TS, the compiler don't show this error!


// 4.2 Why No Static Classes?
// TypeScript (and JavaScript) don’t have a construct called static class the same way as, for example, C# does.

// Unnecessary "static" class:
class MyStaticClass {
  static doSomething() {}
}
 
// Preferred (alternative 1):
function doSomething() {}
 
// Preferred (alternative 2):
const MyHelperObject = {
  dosomething() {},
};

