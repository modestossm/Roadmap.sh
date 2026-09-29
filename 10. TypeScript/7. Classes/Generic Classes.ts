// 5. Generic Classes
// Classes can use generic constraints and defaults the same way as interfaces.

class Box<Type> {
  contents: Type;

  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b = new Box("hello!"); // const b: Box<string>

