const testing1 = function () {
  console.log("Here I am...");
};

testing1();

// -- Higher Order and Callback Functions --//

// -- Interview Questions -- //

// Callback Functions
const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;
const mul = (num1, num2) => num1 * num2;
const pow = (num1, num2) => num1 ** num2;

//Higher Order Functions
const calculator = (num1, num2, process) => process(num1, num2);

console.log(calculator(8, 2, add));
console.log(calculator(8, 2, sub));
console.log(calculator(8, 2, div));
console.log(calculator(8, 2, mul));
console.log(calculator(8, 2, pow));

// ------------------------------------------------- //
// Immediately Invoked Function Expression
// IIFE override default value of parameter.
const testing = ((me = 'Developer') => `Here is ${me}...`)('Admin');

console.log(testing);
