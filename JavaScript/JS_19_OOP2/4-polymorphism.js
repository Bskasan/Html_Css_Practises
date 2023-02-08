//* =====================================
//*      OOP -  Polymorphism(ES6)
//*=====================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

//? When a child class method overrides the parent class method of the same name, parameters and return type, it is termed as method overriding. Also, be reminded that this is completely different from the concept of method overloading. Method overloading occurs when there are two functions with the same name but different parameters.

console.log("Polymorphism");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}`;
  }

  getAge() {
    return `${new Date().getFullYear() - this.year}`;
  }

  setPrice(price) {
    const taxRate = 1.1;
    this.price = Math.trunc(price * taxRate);
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  //! Overloaded Metot (Ayni metodun farkli parametreler ile kullanilmasi)
  setPrice(price, taxRate = 1) {
    this.price = Math.trunc(price * taxRate);
  }

  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle ve ayni parametre listesi ile yeniden tanimlanmasi)
}

//? Magazine objesinin yeni bir instance
const mag1 = new Magazine("SRE", "Einstion", 1930, "Nov");
console.log(mag1);
console.log(mag1.getAge());

//?Overloaded Metot cagriliyor.
mag1.setPrice(100, 1.2);
console.log(mag1);
