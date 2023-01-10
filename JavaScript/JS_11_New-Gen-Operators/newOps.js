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
