console.log("test connection");

console.log(5 + 6);
console.log(4 - 3);
console.log(10 / 2);
console.log(10 / 3);
console.log(2 ** 5);
console.log(2 * 5);

console.log("----------------------------");
let x = 10;
let y = x++;
// ? ++ increment does increment after every expression handled.

console.log(`Number y  = ${y}`);
console.log(x);

console.log("----------------------------");
let a = 10;
let b = --a;

console.log(`B is equal to ${b}`);

console.log("----------------------------");
console.log("----------------------------");

let v = 10;
let c = 10;

console.log(v != c);
console.log(v == c);

console.log("----------------------------");
console.log("----------------------------");

let q = 12;
let w = "22";

// ? to check if they two are the same type of variable or not and return true or false.
console.log(q === w);
console.log(q !== w);

console.log("----------------------------");
console.log("----------------------------");

let k = 10;

// ? k = true -> !k = false -> !!k = true.
// ? Each variable has their own boolean equivalent.
console.log(!!k);

console.log("----------------------------");
console.log("----------------------------");

let num = 10;

//Checking odd number
console.log(x % 2 == 1);
console.log(Boolean(x % 2));

//Checking even number
console.log(x % 2 == 0);
console.log(!(x % 2));

console.log("----------------------------");
console.log("----------------------------");

const numberEntered = prompt("Please enter a number: ");
// ! or you can use let as well as const.

// * check if a number is divisible by 5
console.log(`The Entered number is divisible by 5: ${numberEntered % 5 == 0}`);

console.log("----------------------------");
console.log("----------------------------");

const cigarette = confirm("Do you smoke?");
const alcohol = confirm("Do you take alcohol?");
const age = confirm("Are you older than 65?");


let risk = cigarette || alcohol || age;



console.log(`Are you at risk : ${risk}`);

const username = "clarusway";
const password = "12345";

const usernameEntered = prompt("Enter Username: ");
const passwordEntered = prompt("Enter Password: ");

const isAuthenticated = username == usernameEntered && password == passwordEntered;

console.log(isAuthenticated);


