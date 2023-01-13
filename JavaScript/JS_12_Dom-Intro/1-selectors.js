console.log("***** SELECTORS *****")

document.title = "❤️ DOM-INTRO ❤️";

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.color = "blue";
myHeader.style.backgroundColor = "yellow";

const button = document.getElementById("btn");
const textInput = document.getElementById("input");
button.style.backgroundColor = "lightblue";
button.style.color = "black";
button.style.padding = "0.7rem";
button.style.border = "none";
button.style.borderRadius = "10px";

textInput.style.padding = "0.7rem";
textInput.style.borderRadius = "10px";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const myList = document.getElementsByTagName("li");
console.log(myList); 
//? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
//? return HTML Collection which is similar to array, but it's not array.

myList[0].style.color = "magenta";
myList[myList.length - 1].style.color = "purple";

console.log(myList.item(3));

//! getElementsByTagName bize bir HTMLCollection(bir nevi dizi) dondurur.
const header = document.getElementsByTagName("header");
console.log(header[0]);

//! Changing the content (textContent, innerText, innerHTML)
// myList[3].textContent = "REACT / VUE";
// myList[3].innerText = "REACT / VUE / Swelte";
myList[3].innerHTML = "REACT / VUE / Swelte / Angular";

console.log(myList[2].textContent);//? Javascript - JS is an object-based language
//? textContent HTML elementinin tum yazi dugumlerini CSS veya HTML 'e bakmasizin verir.

console.log(myList[2].innerText);//? innerText CSS parse islemi yaparak yazi elementi dondurur.

console.log(myList[2].innerHTML) //? innerHTML tamamen HTML parse islemi yaparak elementlere ulasmamizi saglar

//! Changing html here is problematic in the real world, not recommended. Hackers steal your password by js script.
myList[4].innerHTML += `<li class="link"> CW </li>`;
myList[4].style.color = "white";

//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================