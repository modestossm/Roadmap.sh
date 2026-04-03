// Module design pattern (closures) - Example

const matrix = (function() {
   // variables that ought to be accessible by the
   // entire code below are defined here
   /* ... */

   // create r x c matrix
   function create(r, c = r) { /* ... */ }

   // return a + b
   function sum(a, b) { /* ... */ }

   // return a - b
   function diff(a, b) { /* ... */ }

   // return a x b
   function product(a, b) { /* ... */ }

   // return the sum of the elements in the diagonal,
   // starting from the top-left corner of the a
   function sumDiagonal(a) { /* ... */ }


   return {
      create: create,
      sum: sum,
      diff: diff,
      product: product,
      sumDiagonal: sumDiagonal,

      // more methods follow
      /* ... */
   }
})();