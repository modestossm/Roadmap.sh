// Lexical environment

var a = 'static';

function f1() {
   console.log(a);
}

function f2() {
   var a = 'dynamic';
   f1();
}

f2();
console.log("----------------");

// The functions are in the same lexical environment

(function() {
   var a = 'static';

   function f1() {
      console.log(a);
   }

   function f2() {
      var a = 'dynamic';
      f1();
   }

   f2();
   console.dir(f1);
})();

console.log("----------------");

// The variables are not in the same lexical environment

var a = 'easy';

(function() {
   var b = 'easy';

   function f1() {
      console.log(a, b);
   }

   function f2() {
      var a = 'difficult';
      var b = 'difficult';
      f1();
   }

   f2();
})();