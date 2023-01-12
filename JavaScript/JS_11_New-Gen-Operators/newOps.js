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

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)

const autos = [""]