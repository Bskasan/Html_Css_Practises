//* =======================================================
//*                      FOREACH METHOD
//* =======================================================

console.log("************ ITERATION ************");

let students = ["Jonathan", "Henry", "Micheal", "John"];
let numbers = students.forEach(WriteOnConsole);

function WriteOnConsole(name) {
  console.log(name);
}

console.log("*********************************");

//? --------------------- Sample ----------------------------
//? Dizideki herbir fiyati konsola bastiriniz

const prices = [100, 250, 50, 89];

prices.forEach((p) => console.log(p));

//? Sample: prices dizisindekilerin toplamini konsola yazdiriniz.
let sum = 0;
prices.forEach((price) => (sum += price));

console.log("Sum: ", sum);
console.log(prices.forEach((price) => (sum += price)));
//! undefined - it doesn't have return.
//! NOTE: forEach is a void method that has no return.

//? --------------------- Sample ----------------------------
//? prices dizisindeki her bir ara toplam degerini konsola
//? bastiriniz.

let total = 0;
prices.forEach((p, i, arr) => {
  total += p;
  console.log(`${i + 1}. iteration : ${total}`);

  arr[i] = Math.trunc(p * 1.1);
});

console.log(prices);

//* =======================================================
//*                      MAP METHOD
//* =======================================================

//* =======================================================
//*                      CHAINING (PIPELINE)
//* =======================================================

//* =======================================================
//*                      FILTER METHOD
//* =======================================================

//* =======================================================
//*                      REDUCE METHOD
//* =======================================================

//* =======================================================
//*                      OTHERS
//* =======================================================
