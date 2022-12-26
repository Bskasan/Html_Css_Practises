const testing = function () {
  console.log("Here I am...");
};

testing();

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

function testing2 (){
    
}
