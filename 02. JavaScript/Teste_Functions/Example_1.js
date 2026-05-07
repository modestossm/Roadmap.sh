// arguments[i]

function myConcat(argument1, argument2) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i] + argument1 + argument2 + " ";
  }
  return result;
}

console.log(myConcat(2, 4, 8, 16, 32));


// rest operator

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));

console.log(sum(1, 2, 3, 4));

console.log(sum(1, 2, 3, 4, 5));