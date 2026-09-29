// 5. Generic Classes
// Classes can use generic constraints and defaults the same way as interfaces.

class Box<Type> {
  contents: Type;

  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b1 = new Box("hello!"); // const b: Box<string>


// 5.1 Type Parameters in Static Members

class Box2<Type> {
  // static defaultValue: Type; // Error: Static members cannot reference class type parameters.
}
