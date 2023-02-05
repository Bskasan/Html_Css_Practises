//* ==============================================
//*      OOP - Classes and Inheritance (ES6)
//* ===============================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

console.log("*** ES6 - Classes ***");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    //? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
    //  this.getTitle = function () {
    //    return this.title
    //  }
  }

  //! Funtions go to the prototype area with new way which come with ES6.
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }

  getAge() {
    return `${new Date().getFullYear() - this.year}`;
  }
}

//! Creating new instances
const book1 = new Book("Kasagi", "Ömer Seyfettin", 1920);
console.log(book1);
console.log(book1.getSummary());

const book2 = new Book("Simyaci", "Pauolo Coelho", 1990);
console.log(book2.getSummary());
console.log(book2.getAge());


