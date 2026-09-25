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
