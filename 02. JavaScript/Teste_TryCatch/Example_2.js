function isNumeric(x) {
  return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
  if (!values.every(isNumeric)) {
    throw new TypeError("Can only add numbers");
  }
  return values.reduce((a, b) => a + b);
}

 // 6
try {
  console.log(sum(1, 2, 3)); // Run
  console.log(sum("1", "2")); // Stop run -> throw Error -> catch
} catch (e) {
  console.error(e); // TypeError: Can only add numbers
}