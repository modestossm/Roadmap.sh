function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }

  let calc = width * height;

  return console.log(calc);
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}

try {
  getRectArea(3, 4);
} catch (e) {
  console.error(e);
  // Expected output: 12
}