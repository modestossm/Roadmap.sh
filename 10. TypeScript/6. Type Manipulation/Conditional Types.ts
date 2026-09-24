// Conditional Types
// Conditional types help describe the relation between the types of inputs and outputs.

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string; // type Example1 = number
 
type Example2 = RegExp extends Animal ? number : string; // type Example2 = string