//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! We can define objects with 3 different ways.
//*------------------------------------------------------------
//* 1-  new operator from Object() class.
//*------------------------------------------------------------

const car = new Object();
car.brand = "Volvo";
car.model = "1990";
car.color = "egean blue";

const car2 = new Object();
car2.brand = "BMW";
car2.model = "2020";
car2.color = "red";

console.log(car);
console.log(car.brand); //? Accessing with . notation.
console.log(car["color"]); //? Accessing with square brackets.

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

//*------------------------------------------------------------
//* 2-  By using object constructor (We'll learn with OOP in detail.)
//*------------------------------------------------------------

function Personal(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  //console.log(this);//? icinde bulundugunuz object i refere eder.
}

const p1 = new Personal("12345678910", "Jonathan", 40000);
console.log(p1);

const p2 = new Personal("123455428910", "Micheal", 55000);
console.log(p2);

const p3 = new Personal("1231235428910", "Bekir"); //! salary = undefined;
console.log(p3);

console.log(window.Personal);

//window.alert("Merhaba")
console.log(this);
//? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window u gosterir.

//*------------------------------------------------------------
//* 3-  Object literal ( Most used and recommended)
//*------------------------------------------------------------