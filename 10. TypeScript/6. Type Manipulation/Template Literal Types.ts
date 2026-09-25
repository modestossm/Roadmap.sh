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


// 2. Inference with Template Literals
type PropEventSource2<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};
 
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource2<Type>;
 
const person2 = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
 
person2.on("firstNameChanged", newName => {
    // (parameter) newName: string
    console.log(`new name is ${newName.toUpperCase()}`);
});
 
person2.on("ageChanged", newAge => {
    // (parameter) newAge: number
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})

// Here we made on into a generic method.
// When a user calls with the string "firstNameChanged", TypeScript will try to infer the right type for Key.
// To do that, it will match Key against the content before "Changed" and infer the string "firstName".
// Once TypeScript figures that out, the on method can fetch the type of firstName on the original object, 
// which is string in this case. Similarly, when called with "ageChanged", 
// TypeScript finds the type for the property age which is number.


// 3. Intrinsic String Manipulation Types

// 3.1 Uppercase<StringType>
// Converts each character in the string to the uppercase version
type Greeting2 = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting> // type ShoutyGreeting = "HELLO, WORLD"
 
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app"> // type MainID = "ID-MY_APP"


// 3.2 Lowercase<StringType>]
// Converts each character in the string to the lowercase equivalent.
type Greeting3 = "Hello, world"
type QuietGreeting = Lowercase<Greeting> // type QuietGreeting = "hello, world"
 
type ASCIICacheKey2<Str extends string> = `id-${Lowercase<Str>}`
type MainID2 = ASCIICacheKey<"MY_APP"> // type MainID2 = "id-my_app"


// 3.3 Capitalize<StringType>
// Converts the first character in the string to an uppercase equivalent.
type LowercaseGreeting = "hello, world";
type Greeting4 = Capitalize<LowercaseGreeting>; // type Greeting4 = "Hello, world"


// 3.4 Uncapitalize<StringType>
// Converts the first character in the string to a lowercase equivalent.
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>; // type UncomfortableGreeting = "hELLO WORLD"