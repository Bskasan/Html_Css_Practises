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

//! if we have two conditions or filter we can use chaining.
//! if you have chance to use one line code, you should use to have cleaner code.
const salaries = [80000, 75000, 120000, 100000];
//* Two stages (filter and map methods)
//* 1 -> s < 100000
//* 2 -> y * 1.1
const addedSalaries = salaries
  .filter((s) => s < 100000)
  .map((y) => Math.trunc(y * 1.1))
  .forEach((x) => console.log(x));
//? addedSalaries is an exercise for Chaining (Pipeline).
//? We cannot use a map or sth else after forEach method, because forEach doesn't have return or doesn't return sth. It's a void function.
console.log(salaries);
console.log(addedSalaries);

//* =======================================================
//*                      FILTER METHOD
//* =======================================================

const nums = [10000, 2000, 5000, 25000, 7500, 18000, 14000, 7200];
const numsFilter = nums.filter((v) => v >= 8500);
console.log(numsFilter);

const range = nums.filter((n) => n >= 6000 && n <= 20000);
console.log(range);

//* =======================================================
//*                      REDUCE METHOD
//* =======================================================

//! it returns value, not array.
let nums2 = [1, 2, 3, 4, 5, 6, 7];
let sum2 = nums2.reduce((acc, value) => acc + value, 0);
let mul2 = nums2.reduce((acc, value) => acc * value, 1);
let sumSalaries = salaries.reduce((total, salary) => total + salary);
//* 0 / 1, from which value it starts.
console.log(sum2);
console.log(mul2);
console.log("TOTAL SALARIES : ", sumSalaries); // ? 375.000

//* =======================================================
//*                      OTHERS
//* =======================================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15];
const check = ages.every((age) => age >= 18);
check ? console.log("All ages are over 18") : console.log("Sum are under 18");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80);
console.log(over80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80)); //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = ages.findIndex((age) => age > 18);
console.log(foundIndex); //? 1
