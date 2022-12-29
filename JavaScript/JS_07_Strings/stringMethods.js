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
for(let i = strIndex.length - 1; i >= 0; i--){
    console.log(strIndex[i], i);
}

//INVALID
//console.log(strIndex[-1]); // undefined
//console.log(strIndex[20]); // undefined

console.log(" *** Strings Are Immutable *** ");
console.log(" *** ********************* *** ");

let a = 10;
let b = a;
console.log({a}, {b});
a = 12;
console.log({a}, {b});