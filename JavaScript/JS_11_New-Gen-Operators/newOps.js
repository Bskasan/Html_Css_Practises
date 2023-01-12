//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

// const myH2 = document.getElementsByTagName("h2")
// myH2[0].style.color = "red"

console.log("****** NEW OPERATORS *******");

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1. Method (Classical)
const name1 = car.name;
const model1 = car.model;
console.log(name1);

//* 2. Method (Destructuring)
//* Key names == variable names between the curly braces.
const { name, model, colors } = car; //? Destructure
console.log(name, model);

// ? Objelerin value'larini aktaracagimiz degisken isimlerini
//? objenin property(key) 'lerine esit olmasi gerekir

const { engine } = car;

let { engine: motor } = car; //? You can change the name like this.
console.log(motor);
motor = 2.0;
console.log(motor, car);

car.engine = 2.2;
console.log(car);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1, car2);

const { name: nameCar1, engine: engineCar1 } = car1;
const { name: nameCar2, engine: engineCar2 } = car2;

console.log(nameCar1, engineCar2);

//? Nested destructre
const {
  car1: { name: nameNested, engine: engineNested },
  car2: { model: modelNested },
} = cars;

const model2 = cars.car1.model;
console.log(model2);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//* Classical
team.forEach((t, i) => {
  console.log(i + 1 + ".NAME: ", t.name);
  console.log("SURNAME: ", t.surname);
  console.log("JOB: ", t.job);
  console.log("AGE: ", t.age);
  console.log("**********************");
});

//* Destructuring
team.forEach((person, index) => {
  const { name, surname, job, age } = person;
  console.log(index + 1 + ".NAME:", name);
  console.log("SURNAME:", surname);
  console.log("JOB:", job);
  console.log("AGE:", age);
  console.log("*************");
});

//* functionun dondurdugu obje dogrudan dest. yapilabilir
//* Kullandigimiz yere gore degisiklik gosteriyor, hangisini kullanacagimiz.

const getInfo = () => {
  return {
    id: new Date().getTime(),
    productName: "MacBook",
    price: 50000,
  };
};
console.log(getInfo());

const { productName, price } = getInfo();
console.log("PrICE:", price);

const calculate = ({ price, name }) => {
  console.log("NAME:", name);
  console.log("PRICE:", price * 1.2);
};

calculate({ price: 50000, name: "macbook" });

// const check = ({ a, b, c }) => { //? yolda destr.
//   console.log(a, b, c)
// }

const check = (data) => {
  const { a, b, c } = data; //? icerde destr
  console.log(a, b, c);
};

const data = {
  a: 1,
  b: 2,
  c: 3,
};

check(data);

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//*Classical
const mehmet = names[1]; //* indexing

const [p1, p2, , p4] = names;
console.log(p1, p2, p4);

//*======================================================
//*  REST (...)
//* ======================================================

console.log("===============REST OPERATOR================");
//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)

const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"];

const [x, y, , ...z] = autos; //Dest.
console.log(x, y, z);

//* REST: (Object)
const personal = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { age, job, ...fullName } = personal;
console.log(age, job);
console.log(fullName);

const { pName } = fullName;
console.log(pName);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const sum = (a, b) => a + b;

//? hata vermez fakat sadece 2 argumani toplar
console.log("SUM: ", sum(2, 4, 6));

const sumAll = (...numbers) => {
  //! bireysel degerleri bir array'e cevirdi.
  //? non-iterable -> iterable
  console.log(numbers);
  return numbers.reduce((s, v) => s + v, 0);
};

console.log("SUM: ", sumAll(2, 4, 6, 8));

const showName = (name, surname, ...titles) => {
  console.log(titles);
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary);
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");

//*==================================================
//*  SPREAD (...)
//* =================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

//* Array concatenation
const flyingVehicles = ["aircraft", "helicopter", "drone"];

const autoMobile = ["truck", "suv", "Car"];

//? 1. Method with concat method in Arrays.
console.log(flyingVehicles.concat(autoMobile));

//? 2. Method with Spread
const allVehicles = [flyingVehicles, autoMobile];
console.log(allVehicles);
//! Opening and Combining the Arrays.
const allVehicles2 = [...flyingVehicles, "Bicycle", ...autoMobile];
console.log(allVehicles2);

const citrus = ["orange", "lime", "lemon"];
const fruits = ["apple", ...citrus, "banana", "chery", "pear"];
console.log(fruits);

//* String Spread
let buryan = "Buryan yemegi hangi yoreye aittir.";
//! When we want to open a string with spread, it will change to array from letters
const charBuryan = [...buryan];
console.log(buryan);
console.log(charBuryan);

//* Max() - Dizileri fonksiyonlara acik bir sekilde parametre vermek icin
console.log(Math.max(1, 2, 3, 33, 4, 5));

const numbers = [3, 1, 23, 49, 52, 44];
// max method returns value, so we need to open our array.
console.log(Math.max(...numbers));

//* Array Copy
const myNumbers = [3, 5, 5, [7, 8]];
const herNumbers = [-5, -4, ...myNumbers, -22]; // Concatenation
console.log(herNumbers);

// const hisNumbers = herNumbers //? Shallow Copy
const hisNumbers = [...herNumbers]; //? Deep Copy
hisNumbers.push(-55);
hisNumbers[5][1] = 88; //? Nested olan degerler deep copy olmaz.
console.log(hisNumbers);
console.log(herNumbers);

//! spread operatoru ile iki dizi arasinda kopyalama yapilabilir. bunlar birbirinden bagimsiz calisabilir. nested larda deep copy mantigi yoktur.

//* Object Copy
const myObj = { a: 1, b: 2, c: 4 };
const herObj = { aa: 2, z: 4, cc: 3 };

const copyObj = { ...myObj };
console.log(copyObj);
copyObj.c = 44;
console.log(myObj);
console.log(copyObj);

const combinedObjs = {...herObj, ...myObj};
console.log(combinedObjs);
