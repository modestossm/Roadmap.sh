class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name);
  console.error(e.foo);
  console.error(e.message);
  console.error(e.stack); // Error Object -> CustomError: bazMessage
}