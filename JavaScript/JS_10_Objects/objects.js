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

console.log(car);
console.log(car.brand); //? Accessing with . notation.
console.log(car["color"]);//? Accessing with square brackets.

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.


//*------------------------------------------------------------
//* 2-  By using object constructor (We'll learn with OOP in detail.)
//*------------------------------------------------------------

function Personal(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
