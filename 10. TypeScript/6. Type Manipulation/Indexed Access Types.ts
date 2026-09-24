// Indexed Access Types

type Person = { age: number; name: string; alive: boolean };

// Examples:
type Age = Person["age"]; // type Age = number

type I1 = Person["age" | "name"]; // type I1 = string | number
 
type I2 = Person[keyof Person]; // type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // type I3 = string | boolean

// type I1 = Person["alve"]; // Error: Property 'alve' does not exist on type 'Person'.

// Another example of indexing with an arbitrary type is using number to get the type of an array’s elements:

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person1 = typeof MyArray[number]; // type Person = { name: string, age: number }
type Age1 = typeof MyArray[number]["age"]; // type Age = number

// Or

type Age2 = Person["age"]; //type Age2 = number