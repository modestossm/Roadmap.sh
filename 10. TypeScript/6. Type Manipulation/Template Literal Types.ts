// Template Literal Types
// When used with concrete literal types, 
// a template literal produces a new string literal type by concatenating the contents.

type World = "world";
 
type Greeting = `hello ${World}`; // type Greeting = "hello world"

// When a union is used in the interpolated position, 
// the type is the set of every possible string literal that could be represented by each union member:
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs1 = `${EmailLocaleIDs | FooterLocaleIDs}_id`; // type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"


// For each interpolated position in the template literal, the unions are cross multiplied:
type AllLocaleIDs2 = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs2}`; // type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"


// 1. String Unions in Types
// The power in template literals comes when defining a new string based on information inside a type.

type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};
 
/// Create a "watched object" with an `on` method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const passedObject = {
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
};

const person = makeWatchedObject(passedObject);
 
person.on("firstNameChanged", () => {});
 
// Prevent easy human error (using the key instead of the event name):
// person.on("firstName", () => {}); // Error: Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.
 
// It's typo-resistant:
// person.on("frstNameChanged", () => {}); // Error: Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.