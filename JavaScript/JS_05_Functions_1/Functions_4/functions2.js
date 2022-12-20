function FactorialNum(num) {
  let result = 1;

  if (num === 0) return 1;

  if (isNaN(num)) return "Provide a number!";

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(FactorialNum(3));
console.log(FactorialNum(4));
console.log(FactorialNum(0));
console.log(FactorialNum("naber"));

// --------------------------------------------------- //

console.log("--------------------------------------");

function greatest(num1, num2, num3) {
  let result;

  if (num1 > num2 && num3) result = `${num1} is greatest`;
  else if (num2 > num1 && num3) result = `${num2} is greatest`;
  else if (num3 > num2 && num1) result = `${num3} is greatest`;

  return result;
}

console.log(greatest(3, 2, 1));

console.log("--------------------------------------");

function Calculator(a, b, operator) {
  const add = function (a, b) {
    return a + b;
  };

  const sub = function (a, b) {
    return a - b;
  };

  const div = function (a, b) {
    return a / b;
  };

  const mul = function (a, b) {
    return a * b;
  };

  if (operator === "+") return add(a, b);
  if (operator === "-") return sub(a, b);
  if (operator === "/") return div(a, b);
  if (operator === "*") return mul(a, b);
}

console.log(Calculator(3, 2, "+"));
