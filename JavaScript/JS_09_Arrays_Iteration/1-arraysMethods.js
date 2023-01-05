//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

//? Iteration: the process of doing something again and again, usually to improve it, or one of the times you do it

console.log("**** ACCESS ****");
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3];

//* includes()
//*------------------------------------------------
console.log(numbers.includes(4)); //? false
console.log(numbers.includes("4")); //? true

//* indexOf(), lastIndexOf();
//*------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunmazsa return -1.
console.log(numbers.indexOf(3)); //? 0
console.log(numbers.lastIndexOf(3)); //? 9
console.log(numbers.indexOf(7));
//? -1 -> not found. and returns -1 when it couldn't find the element.

//* join()
//*------------------------------------------------
//? Join, dizinin elemanlari birlestirip stringe cevirir.
//? Join method is used to change array elements to string by combining them.
console.log(numbers.join(" <--> "));
//? You can add sepearator as an parameter. Default separator is ','

let data = [3, 1, 5, 7, 8, 910, 22, 3];

data = data.sort((a, b) => b - a).join(" "); //? Mutator method
console.log(data);

//* toString()
//*------------------------------------------------
//? toString methodu sadece dizinin elemanlarinin aralarina (virgul) koyarak birlestirir ve string yapar.
console.log(numbers.toString());

//* slice(start, end) -- end exclusive
//*------------------------------------------------
const cars = ["Bmw", "Mercedes", "Fiat", "Anadol"];
console.log(cars.slice(2, 4));
console.log(cars.slice(1));
//? 2 - Start index. (included)
//? 4 - End indext (not included)
//? Tek rakam baslangic anlamina gelir ve sonuna kadar alir.

const newCars = cars.slice(3, 2);
console.log(newCars, cars);

//* concat()
//*------------------------------------------------

const message = ["The weather", "is", "very", "nice"];
const now = [new Date().toLocaleString()]; //return date and time as string.

console.log(now); //? ['1/5/2023, 5:41:22 PM']

const concattedMsg = message.concat(now);
console.log(concattedMsg);

