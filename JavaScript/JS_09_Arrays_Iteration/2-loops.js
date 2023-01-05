//* =======================================================
//*                      FOR LOOP
//* =======================================================

console.log("***** LOOPS IN ARRAYS *****");

//?-----------------SAMPLE----------------------
//? GRADES in ortalamisini hesaplayiniz.

const grades = [55, 77, 23, 89, 100, 44, 33];
let sum = 0;

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

console.log((sum / grades.length).toFixed(2));

//?-----------------SAMPLE----------------------
//? arr dizisindeki negatif ve pozitif sayilari
//? 2 ayri diziye kaydediniz.
const arr = [-5, 15, 22, -4, 45, 78];

let negatives = [];
let positives = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negatives.push(arr[i]);
  } else {
    positives.push(arr[i]);
  }
}

console.log(negatives);
console.log(positives);
console.log(arr);

//* =======================================================
//*                      FOR-IN LOOP
//* =======================================================

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "ahmet",
  "can",
  "mehmet",
  "cem",
  "ahmet",
];

const findStudent = (name) => {
  let counter = 0;

  for (let i in students) {
    if (name.toLowerCase() === students[i]) {
      counter++;
    }
  }

  if (counter === 0) {
    return `${name} cannot be found.`;
  } else {
    return `${name} found ${counter} times.`;
  }
};

console.log(findStudent("ahmet"));
console.log(findStudent("feyza"));
console.log(findStudent("Mehmet"));

//* =======================================================
//*                      FOR-OF LOOP
//* =======================================================
