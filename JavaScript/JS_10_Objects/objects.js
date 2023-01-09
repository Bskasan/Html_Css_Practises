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

const worker = {
  name: "John",
  surname: "Carter",
  age: 32,
  languages: ["C++", "Go", "Java", "JavaScript"],
  salary: 10000,
};

console.log(worker);

//? Write
worker.age += 1;
console.log(worker);

worker["languages"].forEach((lang) => console.log(lang));

const upperCaseLangs = worker["languages"].map((lang) => lang.toUpperCase());
console.log(upperCaseLangs);

//? Adding new key/property and value to our object.
worker.nationality = "USA";
console.log(worker);

const person = worker; // ? Shallow Copying vs Deep Copying
person.dob = 2000;

console.log({ worker });
console.log({ person });

//! Deep Compy !//
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker)); //? Deep Copy
// --> Converting String(stringfy) --> Converting Object (parse)
console.log(JSON.stringify(worker));

//*============================================================
//*                 OBJECT METHODS
//*============================================================

const personalInfo = {
  name: "Bekir",
  surname: "Kasan",
  dob: "1994",
  salary: 12000,
  job: "Developer",
  drivingLicence: false,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  //summary: () => {
  //  return `${this.name} is ${this.calculateAge()} years old.`;
  //},
  summary: function () {
    return `${this.name} was born in ${
      this.dob
    } and He is ${this.calculateAge()} years old.`;
  },
};

//! We cannot use this keyword in the arrow function, because it will show us the global scope. We shouldn't use much inside of objects. It is more effective to use them in the functions(Nested Functions). (---Senior Question---). This keyword in the arrow function won't work on the console!!!

//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a  baglidir.

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log(personalInfo.dob);
console.log(personalInfo.calculateAge());
console.log(personalInfo.summary());

//?============================================================
//?                 ASSIGNMENT
//?============================================================

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log("******* Assignment *********");

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.

console.log(people.person2.name);
console.log(people.person2.salary);

//* One line and more readable line for this question
console.log(`${people.person2.name}'s salary is ${people.person2.salary}`);

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)
//? You can read the details about this question.
//? https://stackoverflow.com/questions/32173793/javascript-print-nested-object-using-for-loop

let salaries = Object.keys(people).map(function(k){
    var p = people[k];

    return [`${p.name}'s salary is ${p.salary}.\n`].join(" ");
}).join(" ");

console.log(salaries);

//? job'i developer olanlarin dob degerlerini yazdiriniz.

let developersDOB = Object.keys(people).map(function(k){
    var p = people[k];
    if(p.job === "developer") {
        return [`Developer ${p.name} was born in ${p.dob}.\n`].join(" ");
    }
    
}).join(" ");

console.log(developersDOB);