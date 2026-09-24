// Indexed Access Types

type Person = { age: number; name: string; alive: boolean };

// Examples:
type Age = Person["age"]; // type Age = number

type I1 = Person["age" | "name"]; // type I1 = string | number
 
type I2 = Person[keyof Person]; // type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // type I3 = string | boolean