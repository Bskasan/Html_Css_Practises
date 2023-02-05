//* =============================================
//*        OOP - Object Constructor (ES5)
//* =============================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor

function Book(title, author, year) {
  //! Parameter -> title

  this.title = title; //! Property name, key -> title
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//? Creating an Instance of new object from object constructor
//? It is easier and cheaper way of instancing of many objects from constructor.
const book1 = new Book("Kasagi", "Omer Seyfeddin", 1920); // ! book1 --> instance.
console.log(book1);
console.log(book1.getSummary());

// console.log(new Date().getFullYear());

const book2 = new Book("Simyaci", "Pauolo Coelho", 1990);
console.log(book2.getSummary());

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
//! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.

//* Ornegin Book nesnesinin tum instance'lari getSummary() fonksiyonunu miras alabilir.
//* Ancak, getSummary() fonksiyonu bellekte sadece bir yer kaplamaktadir.
