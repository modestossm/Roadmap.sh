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
