// Modules

// ES Module Syntax

export default function helloWorld() {
  console.log("Hello, world!");
}


// TypeScript Specific ES Module Syntax

// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
 
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
 
// @filename: app.ts
// import { Cat, Dog } from "./animal.js";
// type Animals = Cat | Dog;