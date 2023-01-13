console.log("**** CREATE NODE ****")

//?Yeni bir P elementi olusturalim
const newPar = document.createElement("p");
const text = document.createTextNode("This is a p element added by JS");
newPar.append(text);
console.log(newPar);

const h2 = document.querySelector(".item-list h2");
//console.log(h2.innerText);

h2.after(newPar);

