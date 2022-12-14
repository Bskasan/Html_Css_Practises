console.log(" ***/// STRING METHODS ///*** ");

let str1 = "Bekir";
let str2 = "Bekir Sadik";
let str3 = "This is";
let str5 = str1 + " " + str2;

//Created new String object with this script.
let str4 = new String("This is a string");

//console.log(typeof str1); // string
//console.log(typeof str2); // string
//console.log(typeof str3); // string
//console.log(typeof str4); // object.

//---------------------------------//
console.log(str1.length);
console.log(str4);
//---------------------------------//

console.log(" *** length Property *** ");
console.log(" *** *************** *** ");

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
console.log(str4.length); // Concatenation

console.log(str1.concat(str2)); // Property for Concatenation.

//---------------------------------//

console.log(" *** Index *** ");
console.log(" *** *************** *** ");

let strIndex = "I am Bekir";
const strIndex2 = "Hello Bekir, How are you?";

console.log(strIndex[1]);
console.log(strIndex[5]);
//console.log(strIndex[10]); // undefined for I am Bekir.
console.log(strIndex2[strIndex2.length - 1]);

for (let i = 0; i < strIndex.length; i++) {
  console.log(strIndex[i], i);
}
console.log(" *** *************** *** ");
for (let i = strIndex.length - 1; i >= 0; i--) {
  console.log(strIndex[i], i);
}

//INVALID
//console.log(strIndex[-1]); // undefined
//console.log(strIndex[20]); // undefined

console.log(" *** Strings Are Immutable *** ");
console.log(" *** ********************* *** ");

let a = 10;
let b = a;
console.log({ a }, { b });
a = 12;
console.log({ a }, { b });

console.log(" *** Escape Sequences *** ");
console.log(" *** ********************* *** ");

console.log(" Hello \t World!");
console.log(" Hello \n World!");
console.log(" Hello Bekir's World!");
console.log(" Hello \\ World!");

console.log(" *** String Methods *** ");
console.log(" *** ********************* *** ");

//----------slice() method----------//
// Positive numbers start from 0.
// Negative values start from -1.
let nameAll = "Bekir Kasan";
let surname = nameAll.slice(6, 11);
let surname2 = nameAll.slice(-8, -2);

console.log(nameAll);
console.log(surname);
console.log(surname2);
console.log(nameAll.slice(5));

//----------substring() method----------//

let cw = "Clarusway";
let cw1 = "Full";
let cw2 = "Stack";

console.log(cw.substring(1, 5));
console.log(cw.substring(5, 1));

//----------concat() method----------//

console.log(cw.concat(" Cohort 13 " + cw1 + " JS Session 8 " + cw2));

//----------includes() method----------//

let myName = "Bekir Sadik Kasan";
let email = "b.kasan@hotmail.com";

console.log(myName.includes("Sadik")); // true
console.log(myName.includes("sadik")); // false

// Checking the email is valid or not.
if (email.includes("@")) {
  console.log("Email is valid!");
} else {
  console.log("!!!Invalid Email!!!");
}

//----------indexOf() method----------//

console.log(myName.indexOf("Kasan")); // returns 12
console.log(myName.indexOf("kasan")); // returns -1

// Checking the email is valid or not.
if (email.indexOf("@") !== -1) {
  console.log("Email is valid!");
} else {
  console.log("!!!Invalid Email!!!");
}

//-----------Practise---------//

let emailInput = "bekir.kasan@claruswa@y.com";
console.log(emailInput.indexOf("@"));
console.log(emailInput.indexOf(".com", emailInput.indexOf("@")));

console.log(" *** ********************* *** ");
console.log(" *** ********************* *** ");

let quote = "You do not KNOW what you do not know until you know.";

//lastIndexOf searches from right to the left and returns the index number of the first found value in the string.
console.log(quote.lastIndexOf("t"));
console.log(quote.lastIndexOf("t", 38));
//search
console.log(quote.search("know"));
console.log(quote.search("KNOW"));
console.log(quote.search(/know/)); // with regular expression.
console.log(quote.search(/know/i)); // i means not case sensitive.

//replace method
let newQuote = quote.replace("know", "find");
//let newQuote2 = quote.replace(/know/i, "find");
//let newQuote2 = quote.replace(/know/g, "find");
let newQuote2 = quote.replace(/know/gi, "find");
//let newQuote3 = quote.replace("know", "find");

console.log(newQuote2);

//split
let welcome = "    Welcome to the Clarusway.   ";

console.log(welcome.split()); // No Separator
console.log(welcome.split("")); // letter by letter array
console.log(welcome.split(" ")); // word by word array
console.log(welcome.split(","));

//to lower Case and uppercase
console.log(welcome.toLowerCase());
console.log(welcome.toUpperCase());

//trim
console.log(welcome.trim());
