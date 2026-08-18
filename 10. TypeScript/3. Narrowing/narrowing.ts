// typeof type guards
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       // Error: 'strs' is possibly 'null'. Null and Array are objects in JS.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

// Truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    // if the numUsersOnline exist, so the numUsersOnline is true. Otherwise, if the value is null, this is false
    // We can apply this in the function above to remove the error
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    // if the strs exist (not null) and is an onbject, do something
    // This verification separete the null (object) from array (object)
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

// Equality narrowing
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
            
    } else {
        console.log(x);
        console.log(y);
  }
}

interface Container {
  value: number | null | undefined;
}
 
function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type. The != operator checks whether a value is either null or undefined.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

// The in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}