"use strict";
function greeter(person) {
    return "Hello, " + person.fName + " " + person.lName;
}
let user = {
    fName: "Bruce",
    lName: "Wayne"
};
document.body.textContent = greeter(user);
