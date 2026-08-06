class Student {
  fullName: string;
  constructor(
    public fName: string,
    public mInitial: string,
    public lName: string
  ) {
    this.fullName = fName + " " + mInitial + " " + lName;
  }
}

interface Person {
    fName: string;
    lName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.fName + " " + person.lName;
}

let user = new Student ("Bruce", "U", "Wayne");

document.body.textContent = greeter(user);