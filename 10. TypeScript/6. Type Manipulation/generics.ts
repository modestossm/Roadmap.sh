// Generics
function identity<Type>(arg: Type): Type {
    // This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later.
    // Here, we use Type again as the return type.
    return arg;
}

// Here we use type argument inference (the most common) 
// That is, we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:
let output = identity("myString");


// 1. Working with Generic Type Variables
function loggingIdentity1<Type>(arg: Type): Type {
    // console.log(arg.length); // Error: Property 'length' does not exist on type 'Type'.
    return arg;
}

function loggingIdentity2<Type>(arg: Type[]): Type[] {
    console.log(arg.length); // Since we’re working with arrays, the .length member should be available, because arrays have .length property.
    return arg;
}


// 2. Generic Types
interface GenericIdentitiesFn1 {
    // generic interface
    <Type>(arg: Type): Type;
}
 
function identities1<Type>(arg: Type): Type {
    return arg;
}
 
let myIdentity1: GenericIdentitiesFn1 = identities1;

// We may want to move the generic parameter to be a parameter of the whole interface
// This makes the type parameter visible to all the other members of the interface:
interface GenericIdentitiesFn2<Type> {
    // generic interface
    (arg: Type): Type;
}
 
function identities2<Type>(arg: Type): Type {
    return arg;
}
// Instead of describing a generic function, we now have a non-generic function signature that is a part of a generic type
let myIdentity2: GenericIdentitiesFn2<number> = identities2;


// 3. Generic Classes
class GenericNumber<NumType> {
  zeroValue?: NumType;
  add?: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 4. Generic Constraints
// We’ll create an interface that describes our constraint
// Here, we’ll create an interface that has a single .length property and 
// then we’ll use this interface and the extends keyword to denote our constraint:

interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no error
  return arg;
}

loggingIdentity({ length: 10, value: 3 });


// 5. Using Type Parameters in Generic Constraints
// We can declare a type parameter that is constrained by another type parameter

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
// getProperty(x, "m"); // Error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.


// 6. Using Class Types in Generics
// This pattern is used to power the mixins design pattern

class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

// 7. Generic Parameter Defaults

interface Container<T, U> {
  element: T;
  children: U;
}

declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
  element?: T,
  children?: U
): Container<T, U>;
 
const div = create(); // const div: Container<HTMLDivElement, HTMLDivElement[]>
 
const p = create(new HTMLParagraphElement()); // const p: Container<HTMLParagraphElement, HTMLParagraphElement[]>


// 8. Variance Annotations
// Covariance and contravariance are type theory terms that describe what the relationship between two generic types is
//Never write a variance annotation that doesn’t match the structural variance!

// Contravariant annotation:
interface Consumer<in T> {
  consume: (arg: T) => void;
}
// Covariant annotation:
interface Producer<out T> {
  make(): T;
}
// Invariant annotation:
interface ProducerConsumer<in out T> {
  consume: (arg: T) => void;
  make(): T;
}

// More examples
class Animals {}
class Dog extends Animals { bark() {} }

// in = Contravariant (T: only in)
interface Consumers<in T> {
  accept: (value: T) => void;
}

// out = Covariant (T: only out)
interface Producers<out T> {
  get: () => T;
}

// in out = Invariant (T: in and out)
interface Box<in out T> {
  get: () => T;
  set: (value: T) => void;
}