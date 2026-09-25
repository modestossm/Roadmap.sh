// 2. Class Heritage

// 2.1 implements Clauses
// You can use an implements clause to check that a class satisfies a particular interface:

interface Pingable {
    ping(): void;
}
 
class Sonar implements Pingable {
    ping() {
        console.log("ping!");
    }
}
 
// class Ball implements Pingable {
//     // Error: Class 'Ball' incorrectly implements interface 'Pingable'. Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//     pong() {
//         console.log("pong!");
//     }
// }


// 2.2 extends Clauses
// A derived class has all the properties and methods of its base class, and can also define additional members.

class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);


// 2.2.1 Overriding Methods
class Base {
  greet() {                                  // acept 0 arguments
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
    // Make this parameter required:
    // greet(name: string) {                 // demands 1 arguments → more restrictive → error)
    //     // Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
    //     // Type '(name: string) => void' is not assignable to type '() => void'.
    //     // Target signature provides too few arguments. Expected 1 or more, but got 0.
    //     console.log(`Hello, ${name.toUpperCase()}`);
    // }
}
// greet(name: string) makes the argument mandatory → the subclass is more demanding/restrictive than the base class → error.


// 2.2.2 Type-only Field Declarations
// We can write declare to indicate to TypeScript that there should be no runtime effect for this field declaration.

interface Animal {
  dateOfBirth: any;
}
 
interface Dog extends Animal {
  breed: any;
}
 
class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}
 
class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}
