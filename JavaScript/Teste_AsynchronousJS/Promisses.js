// Working with promises in JavaScript
// First case: a non-promise value
var p = new Promise(function(resolve, reject) {
    reject("Sorry");
});

var p2 = p.then(null, function(data) {
    // callback returns a non-promise value
    // in this case a string
    return "OK";
});

console.log(p2);

// Second case: an exception thrown
var p = new Promise(function(resolve, reject) {
    reject("Sorry");
});

var p2 = p.then(null, function(data) {
    // callback throws an error
    throw "Sorry again";
});

console.log(p2);


// Third case: an exception thrown
var p = new Promise(function(resolve, reject) {
    resolve("OK");
});

var p2 = p.then(function(data) {
    // callback returns a promise
    return new Promise(function(resolve, reject) {
        resolve(data + " Bye");
    });
});

console.log(p2);