console.log("***** SELECTORS *****");

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

console.log(myList[2].textContent); //? Javascript - JS is an object-based language
//? textContent HTML elementinin tum yazi dugumlerini CSS veya HTML 'e bakmasizin verir.

console.log(myList[2].innerText); //? innerText CSS parse islemi yaparak yazi elementi dondurur.

console.log(myList[2].innerHTML); //? innerHTML tamamen HTML parse islemi yaparak elementlere ulasmamizi saglar

//! Changing html here is problematic in the real world, not recommended. Hackers steal your password by js script.
myList[4].innerHTML += `<li class="link"> CW </li>`;
myList[4].style.color = "white";

//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const itemList = document.getElementsByClassName("item-list");
console.log(itemList); //?HTMLCollection [section.item-list]
console.log(itemList[0]);

//? Array.from() (HTMLCollection -> Array)
const itemListArr = Array.from(itemList);
console.log(...itemList);
itemListArr.forEach((x) => console.log(x));

//? SPREAD (HTMLCollection -> Array)
const itemListSpread = [...itemList];
console.log(itemListSpread);
itemListSpread.forEach((x) => console.log((x.style.color = "red")));

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? 1- queryselector() etiket secebilir.
const myLi = document.querySelector("li"); //? Tag
console.log(myLi);
myLi.style.color = "orange";

//? 2- queryselector() class secebilir.
const addItem = document.querySelector(".add-item");
console.log(addItem);
addItem.style.border = "5px solid grey";
addItem.style.padding = "1rem";

//? 3- queryselector() id secebilir.
const addBtn = document.querySelector("#btn");
console.log(addBtn);
addBtn.style.cursor = "pointer";

//? 4- queryselector() ile CSS deki gibi secim yapilabilir.
const itemH2 = document.querySelector(".item-list h2");
console.log(itemH2);

const addBtnType = document.querySelector("input[type='button']");
console.log(addBtnType.value);
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
