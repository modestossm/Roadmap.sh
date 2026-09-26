// 3. Member Visibility

// 3.1 public
// The default visibility of class members is public. A public member can be accessed anywhere:

class Greeter3 {
  public greet() {
    console.log("hi!");
  }
}
// Because public is already the default visibility modifier, you don’t ever need to write it on a class member, 
// but might choose to do so for style/readability reasons.
const g3 = new Greeter3();
g3.greet();


// 3.1 protected
// protected members are only visible to subclasses of the class they’re declared in:

class Greeter4 {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter4 {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g4 = new SpecialGreeter();
g4.greet(); // OK
// g4.getName(); // Error: Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

// Exposure of protected members:
// Derived classes need to follow their base class contracts, 
// but may choose to expose a subtype of base class with more capabilities. This includes making protected members public:

class Base5 {
  protected m = 10;
}
class Derived5 extends Base5 {
  // No modifier, so default is 'public'
  public m = 15;
}
const d5 = new Derived5();
console.log(d5.m); // OK

