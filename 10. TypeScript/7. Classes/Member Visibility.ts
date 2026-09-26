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

