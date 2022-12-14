const age = +prompt("How old are you?");

if (age > 25) {
  console.log("You are allowed...");
} else {
  console.log("You are NOT allowed...");
}

console.log("----------------------------------");

// ! Plus (+) sign allow us to give input as number in JS.

let num1 = +prompt("Enter a Number: ");

console.log(typeof num1);

if (num1 % 2 == 0) {
  console.log(`${num1} is an even number. `);
} else {
  console.log(`${num1} is an odd number. `);
}

console.log("----------------------------------");

const number1 = +prompt("Enter number 1: ");
const number2 = +prompt("Enter number 2: ");

if (number1 > number2) {
  console.log(`Number 1, ${number1} is greater than Number 2, ${number2}.`);
} else {
  console.log(`Number 2, ${number2} is greater than Number 1, ${number1}.`);
}
