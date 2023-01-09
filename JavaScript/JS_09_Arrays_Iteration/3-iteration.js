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

//? --------------------SAMPLE-----------------------------
//? Bir dizideki tum isimleri BUYUK harfe donusturen uygulamayi yaziniz.

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayse", "canan"];

//! Functional Programming by using methods like map and forEach.
const upperNames = names.map((n) => n.toLocaleUpperCase());
console.log(upperNames);
console.log(names);

//?------------------------SAMPLE--------------------------
//? tlPrices dizisindeki rakamlarin Euro ve Dolar
//? karsiliklarini hesaplatarak yeni dizilere kaydediniz.

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((etl) => (etl / euro).toFixed(2));
const dolarPrices = tlPrices.map((dtl) => (dtl / dolar).toFixed(2));

console.log(euroPrices);
console.log(dolarPrices);
//* =======================================================
//*                      CHAINING (PIPELINE)
//* =======================================================

//* =======================================================
//*                      FILTER METHOD
//* =======================================================

const nums = [10000, 2000, 5000, 25000];
const numsFilter = nums.filter((v) => v >= 8500);
console.log(numsFilter);

//* =======================================================
//*                      REDUCE METHOD
//* =======================================================

//* =======================================================
//*                      OTHERS
//* =======================================================
