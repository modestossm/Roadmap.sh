"use strict";
class Student {
    fName;
    mInitial;
    lName;
    fullName;
    constructor(fName, mInitial, lName) {
        this.fName = fName;
        this.mInitial = mInitial;
        this.lName = lName;
        this.fullName = fName + " " + mInitial + " " + lName;
    }
}
function greeter(person) {
    return "Hello, " + person.fName + " " + person.lName;
}
let user = new Student("Bruce", "U", "Wayne");
document.body.textContent = greeter(user);
