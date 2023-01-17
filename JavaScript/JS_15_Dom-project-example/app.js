//? Making choice (Wrong way)
//? ----------- HARD-CODED WAY -----------------
// const stoneImage = document.querySelector(".stone");
// const paperImage = document.querySelector(".paper");
// const scissorImage = document.querySelector(".scissor");

// stoneImage.addEventListener("click", () => {
//   yourChoice.innerHTML = '<img src="./assets/stone.png"></img>';
// });

// paperImage.addEventListener("click", () => {
//   yourChoice.innerHTML = '<img src="./assets/paper.png"></img>';
// });

// scissorImage.addEventListener("click", () => {
//   yourChoice.innerHTML = '<img src="./assets/scissor.png"></img>';
// });
//?----------------------------------------------

const yourChoice = document.getElementById("your-choice"); //? Store our choice
const select = document.querySelector(".select"); //? to get the div element named select.
let userSelect;

select.addEventListener("click", (e) => {
  //console.log(e.target.className);
  //console.log(e.target.getAttribute("alt"));
  userSelect = e.target.getAttribute("alt");
  yourChoice.innerHTML = `<img src="./assets/${userSelect}.png"></img>`;
});
