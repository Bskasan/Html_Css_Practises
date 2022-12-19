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

const sayHello = function(){
    console.log("hello");
}

sayHello();