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
