//* ========================================
//*                (OOPS)
//* =========================================

//* Object Literals
console.log("**** Object Literals ****");

//! JS is not class-based object oriented programming language, but is prototype-based programming language.
//? Java, C++ --> Objects comes from Classes
//? in JS, we can create an object without defining a class.

const book1 = {
  title: "The Karamazov Brothers",
  author: "Dostoevski",
  year: 1886,
  getSummary: function () {
    //? this keyword refers to the object which its connected.
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.getSummary());

//? This method inherits from object prototype(Object nesnesinden geldi.)
console.log(book1.hasOwnProperty("year"));
