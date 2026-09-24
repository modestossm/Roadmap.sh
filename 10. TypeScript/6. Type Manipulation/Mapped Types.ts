// Mapped Types
// A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};
 
type FeatureOptions = OptionsFlags<Features>; // type FeatureOptions = { darkMode: boolean, newUserProfile: boolean }


// 1. Mapping Modifiers
// There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.
// You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.

// Removes 'readonly' attributes from a type's properties:
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>; // type UnlockedAccount = { id: string, name: string }

// Removes 'optional' attributes from a type's properties:
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>; // type User = { id: string, name: string, age: number }


// 2. Key Remapping via as
// We can re-map keys in mapped types with an as clause in a mapped type:

// type MappedTypeWithNewProperties<Type> = {
//     [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

// We can leverage features like template literal types to create new property names from prior ones:
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
 
interface Persons {
    name: string;
    age: number;
    location: string;
}
 
type LazyPerson = Getters<Persons>; // type LazyPerson = { getName: () => string, getAge: () => number, getLocation: () => string }