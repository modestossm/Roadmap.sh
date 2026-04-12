// Generator Demo
function positiveInts(n) {
   let i = 1;
   const max = (n < 1 || typeof n !== "number") ? 1 : n;
   return {
      next: function() {
         if (i > max) return {value: undefined, done: true}
         return {value: i++, done: false}
      }
   }
}

const seq = positiveInts(3);

console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log("--------------------");


//Generators: the yield keyword
function* positiveInts() {
   for (let i = 0; true; i++) {
      yield i;
   }
}

const seq2 = positiveInts();

console.log(seq2.next());
console.log(seq2.next());
console.log(seq2.next());
console.log(seq2.next());
console.log("--------------------");


//Generators: the yield keyword
function* gen() {
   var a = yield 10;
   var b = yield a + 5;
   yield b;
}

var seq3 = gen();

console.log(seq3.next(15)); // 10 -> because yield holds 10
console.log(seq3.next(30)); // 35 -> because "yield 10" was replaced by 30 in the variable a, and variable b is 30 + 5
console.log(seq3.next(60)); // 60 -> because 60 replaced the whole expression "yield a + 5"
console.log(seq3.next(120)); // undefined -> because 120 replaced the "yield b"