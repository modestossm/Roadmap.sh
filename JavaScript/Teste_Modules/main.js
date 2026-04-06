import {sayHi} from './sayHi.js';

console.log(sayHi);
console.log(import.meta.url);

sayHi('John');
document.body.innerHTML = sayHi('John');