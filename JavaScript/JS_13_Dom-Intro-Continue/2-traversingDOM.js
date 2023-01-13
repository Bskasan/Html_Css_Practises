console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const list = document.querySelector("li");
console.log(list);

console.log(list.parentElement); //? ul
console.log(list.parentNode); //? ul
console.log(list.parentNode.parentNode); //? main

//! closest(): belirtilen elementin parent'larin ilk uygun parent'i secer.
console.log(list.closest("section")); //? item-list
console.log(list.closest("body").querySelector("#header h1")); //? h1

//*2- Asagi Yonde traverse
//*----------------------------------------------
const addItem = document.querySelector(".add-item");

console.log(addItem.children); //?HTMLCollection(3) [h2, input#input, input#btn, input: input#input, btn: input#btn]

addItem.children[0].style.color = "red"; //? h2
console.log(addItem.parentNode.parentNode.children[0].children[0]); //? h1

const header = document.querySelector("header")
const h1 = header.firstElementChild
console.log(addItem.lastElementChild.value)

console.log(h1.firstChild) //? DOM SELECTORS (bir yazi elementinin icerisindeki yazi dugumunu verir)

//*3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling

const ul = document.querySelector("ul");

const lists = ul.children;
console.log(lists);

const js = lists[2];
console.log(js.innerText); //? Javascript
const css = js.previousElementSibling;
console.log(css.innerText);

const django = js.nextElementSibling.nextElementSibling;
console.log(django.innerText); //? Django

