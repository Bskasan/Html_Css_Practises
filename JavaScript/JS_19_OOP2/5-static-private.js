//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  //! Private property, variable
  #id;

  //! Static property tanimlamasi
  //!! Static degiskenlere class degiskenleri adi verilir.
  static counter = 0;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#id = "111";

    Book.counter++;
  }

  getSummary() {
    return `${this.title} was writtten by ${
      this.author
    } and it's age is ${this.#computeAge()}`;
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenler okunabilir.
  //? Bu tip metotlara getter metot denilir.
  //! getter metotlari class icerisinde tanimlanmalidir.
  getId() {
    return this.#id;
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.
  //? Bu tip metotlara setter metot denilir.
  //! setter metotlar class icerisinde tanimlanmalidir.
  setId(id) {
    this.#id = id;
  }

  #computeAge() {
    return new Date().getFullYear() - this.year;
  }
}

const book1 = new Book("Simyaci", "Poelho Coelgo", 1988);
console.log(book1);

//? Private bir degiskenin degeri class disindan dogrudan okunamaz.
// console.log(book1.#id)

//? Private bir degiskenin degeri class disindan dogrudan degistirilemez
// book1.#id = "123456"

//? Private degiskeni okuma
console.log(book1.getId());

//? Private degiskene deger atama
console.log(book1.setId("4444"));

console.log(book1);

//? Private metotlar class disindan eriselemezler.
//? Ancak class icerisindeki diger public metotlardan erisilebilirler.
//! console.log(book1.#computeAge());
console.log(book1.getSummary());

//! Diger bir cok class-temelli dilde 3 farkli tanimlayici ile class'larin
//! erisim kisitlamalari belirtilebilir.
// public void deneme(){
// }

// protected Integer topla(){
// }

// private Double carp(){

// }

//? ******* STATIC ********
// Book.prototype.counter = 0
// book1.counter++
// console.log(book1)

// const book2 = new Book("XYZ", "Poelho Coelgo", 1920)
// book2.counter++
// console.log(book2)

//! Static degiskenlere instance'lar uzerinden erislemez.
console.log(book1.counter);

//! Static degiskenler classname.property seklinde erisilir.
console.log(Book.counter);

const book2 = new Book("ffdgfdgfd", "Poelho Coelgo", 1920);
const book3 = new Book("fdgdfgfd", "Poelho Coelgo", 1920);
const book4 = new Book("fvfdvfdgdfgfd", "Poelho Coelgo", 1920);
console.log(Book.counter);
