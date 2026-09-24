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

// Conditional types take a form that looks a little like conditional expressions (condition ? trueExpression : falseExpression) in JavaScript:
// SomeType extends OtherType ? TrueType : FalseType;

// The power of conditional types comes from using them with generics:
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
 
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// If a library has to make the same sort of choice over and over throughout its API, this becomes cumbersome.
// For every new type createLabel can handle, the number of overloads grows exponentially.
// Instead, we can encode that logic in a conditional type:
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabels<T extends number | string>(idOrName: T): NameOrId<T> {
    // We can then use that conditional type to simplify our overloads down to a single function with no overloads.
    throw "unimplemented";
}
 
let a = createLabels("typescript"); // let a: NameLabel
 
let b = createLabels(2.8); // let b: IdLabel
 
let c = createLabels(Math.random() ? "hello" : 42); // let c: NameLabel | IdLabel


// 1. Conditional Type Constraints
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
  message: string;
}
 
interface Dog {
  bark(): void;
}
 
type EmailMessageContents = MessageOf<Email>; // type EmailMessageContents = string
 
type DogMessageContents = MessageOf<Dog>; // type DogMessageContents = never

// As another example, we could also write a type called Flatten that flattens array types to their element types:
type Flatten<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type Str = Flatten<string[]>; // type Str = string
 
// Leaves the type alone.
type Num = Flatten<number>; // type Num = number


// 2. Inferring Within Conditional Types
// We could have inferred the element type in Flatten instead of fetching it out “manually” with an indexed access type:

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;
 
type Num1 = GetReturnType<() => number>; // type Num = number
 
type Str1 = GetReturnType<(x: string) => string>; // type Str = string
 
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // type Bools = boolean[]