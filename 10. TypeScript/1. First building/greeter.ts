interface Person {
    fName: string;
    lName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.fName + " " + person.lName;
}

let user = {
    fName: "Bruce",
    lName: "Wayne"
};

document.body.textContent = greeter(user);