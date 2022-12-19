//x = 10;
//console.log(x);

//var x;

//y = 10;
//console.log(y);

//let y;
//index.js:6 Uncaught ReferenceError: Cannot access 'y' before initialization

// ------------------- FUNCTION ------------------------------//

function sayHi() {
  console.log("Hi World!!!");
}

sayHi();

//sayHello();
// Error -> index.js:19 Uncaught ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function () {
  console.log("hello");
};

sayHello();

function Greet(name) {
  console.log(`Hello ${name}`);
  console.log("Hello ", name);
  // Two different version of string concanetation
}

Greet("Bekir");
Greet("Mahmut");
Greet("Zeyneb");

// name is parameter, and Bekir, Mahmut, and Zeyneb are arguments that we gave to the function.