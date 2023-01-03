// * Data Structures
// * Client (Browser, computer ...) Side or Server Side

// * Client side -> Local storage, Session Storage, Cookies.
// * Server side => Server, Database

// * Array is data structure that help us to store list of values.

// * Primitive -> number, string, boolean, null, undefined... which is store in stack and easily accessible.

// * Non-primitive -> Object -> Array, function which is more complicated than primitives and stored in heap.

// * An array is a special variable, which can hold more than one value.
// * In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

// ? How to Declare An Array?
// ? Arrayin verileri heap alaninda tutulur (Sirali olarak, diger dillerde farkli olabilir lakin JavaScripte bu sekilde tutulmaktadir.)
// ? const persons = ["Bekir", "Mahmut"];
// ? STORED IN HEAD, BUT REFERENCE IN STACK.

// * ---------------------------------------- *//

// * Defining An Array

console.log("********* ARRAYS ***********");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers[0]); // ! First Value.
console.log(numbers[numbers.length - 1]); // ! Last Value.

// ? 1. Method - Array Literal Method
const names = ["Emir", "Micheal", "Bekir", "Jonathan"];
console.log(names);

// ! By typing dot '.', we will access all methods and parameters for Arrays. (Names dizisinin length property'sine ulasiyoruz.)
console.log(names.length);

const x = 5.234;
console.log(x.toFixed(2));
// * primitive
// * Primitives normally don't have properties. but;
// * Ancak JS kullanimi kolaylastirmak icin bazi durumlarda primitive verileri bir obje sarmalayicisi ile sarmalar.

console.log(typeof names); // ! Arrays are Objects. JS de array aslinda object dedigimiz base object'den turetilmistir.

// * Empty Array
const emptyArray = [];
console.log(emptyArray);

// ? 2. Method - Object Constructor Method
// ? Creating new object from Array. The first method is faster than this one, so the first method is recommended.
const codingLangs = new Array("C", "C++", "JS", "Go");
console.log(codingLangs);

// ? 3. Method - Array.of() method
const numbers2 = Array.of(1, 2, 3);
console.log(numbers2);
// * ---------------------------------------- *//
// * ---------------------------------------- *//

// ? Dizilere erisirken index yani sira numarasi kullanilir.
// ? We use index numbers to access of the values of Array.
console.log(names[1]); // Micheal
const micheal = names[1];
console.log(micheal);

const names1 = ["Emir", "Mahmut", "Bekir", "Jonathan"];
// const lastEl = names1[3]; -> Hard-coded.
const lastEl = names1[names1.length - 1];
console.log(lastEl);
// ? at() method to access last index.
console.log(names1.at(-1));

// names1[2] = "bekir";
names1[2] = names1[2].toUpperCase();
// * You can use uppercase when you assign it to the variable which you want to access to change.
console.log(names1);

// ? Arrays can have different variable type, data types.
const ageArr = [22, 44, 50];
const people = [
  "John",
  "Varmont",
  new Date().getFullYear() - 1990,
  true,
  ageArr,
];

console.log(people);
console.log(++people[4][1]);
console.log(ageArr);

// * Methods Which Can Change the Array / Mutator * //

// ? pop() method is used to remove the last element of Array and returns the element which is removed.
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];
console.log(cars.pop());
console.log(cars);

// ? push() method is used to add an element to the end of the array and returns to the number of the last element of an array.
console.log(cars.push("Lexus"));
console.log(cars)

// ? unshift() method is used to add an element to the 0th element of an array and returns to the number of the last element of an array.
console.log(cars.unshift("Togg"));
console.log(cars);

// ? shift() method is used to remove 0th element and returns the number of removed one.
console.log(cars.shift());
console.log(cars);

// ? splice() method;
// ? 1. parameter : index number of an element to add / eklenecek index numarasi
// ? 2. parameter : 0 ise araya ekleme, 1 ise uzerine yazma
// ? 3. parameter : yeni eklenecek veri

cars.splice(1, 0, "VW");
console.log(cars);

cars.splice(3, 1, "Maseratti");
console.log(cars);

// ? reverse() method
cars.reverse();
console.log(cars);

// ? sort() method, diziyi alfabetik olarak siralar.
// ! Alfabetik olarak siraladigi icin dogru sonuclar vermeyebilir.
// ! There are lots of sorting algorithms, you can always google it.
const numbers4 = [2, 111, 3, 22, 1, 11, 5, 7, 6];
numbers4.sort((a, b) => a - b);
console.log(numbers4);

numbers4.sort((a, b) => b - a);
console.log(numbers4);

cars.sort();
console.log(cars);



// * ---------------------------------------- *//

// * Immutator Methods * //

// * ---------------------------------------- *//

// * Iteration - Arrays * //

// * ---------------------------------------- *//

// * ---------------------------------------- *//
