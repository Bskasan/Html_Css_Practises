let num = 0;

while (num <= 5) {
  console.log(`Your number is ${num}`);
  num++;
}

console.log("----------------------------");

for (let num2 = 0; num2 <= 5; num2++) {
  console.log(num2);
}

console.log("----------------------------");

let num2 = 0;

for (; num2 <= 3; ) {
  console.log(num2);
  num2++;
}

console.log("------------ Separating Text ----------------");

let text = "Clarusway";
let seperator = " . ";
let result = "";

for (let index = 0; index < text.length; index++) {
  result += text[index] + seperator;
}

console.log(result);

console.log("------------ Multiplication Table ----------------");

let numInput = +prompt("Enter enter a number between 1 to 10 : ");

for (let i = 0; i <= 10; i++) {
  let result = numInput * i;
  console.log(`${numInput} x ${i} = ${result}`);
}
