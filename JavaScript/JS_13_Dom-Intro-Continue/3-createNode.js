console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim
const newPar = document.createElement("p");
const text = document.createTextNode("This is a p element added by JS");
newPar.append(text);
console.log(newPar.innerHTML);

const h2 = document.querySelector(".item-list h2");
//console.log(h2.innerText);

h2.after(newPar);
//h2.before(newPar);

//? INPUT value
const myInput = document.getElementById("input"); //? element
console.log(myInput.value); //? value

//? id, class
newPar.id = "par";
newPar.className = "center red";

//? setAttribute()
newPar.setAttribute("id", "para"); 

//? classList
newPar.classList.add("bg-tomato", "left");
newPar.classList.remove("left"); //? removed left class.

if (!newPar.classList.contains("blue")) {
  newPar.classList.add("blue");
} else {
  newPar.classList.add("orange");
}

//? toggle
newPar.classList.toggle("white"); //? if it doesn't have white class, it will check and add the class automatically.

//? getAttribute()
console.log(newPar.getAttribute("class"));
console.log(newPar.getAttribute("id"));
console.log(newPar.getAttribute("name")); //?null
console.log(myInput.getAttribute("name")); //? languages
console.log(myInput.getAttribute("type")); //? text


