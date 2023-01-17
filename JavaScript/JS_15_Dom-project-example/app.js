//? Store our choice
const yourChoice = document.getElementById("your-choice");

const stoneImage = document.querySelector(".stone");
const paperImage = document.querySelector(".paper");
const scissorImage = document.querySelector(".scissor");

stoneImage.addEventListener("click", () => {
  yourChoice.innerHTML = '<img src="./assets/tas.png"></img>';
});

paperImage.addEventListener("click", () => {
  yourChoice.innerHTML = '<img src="./assets/kagit.png"></img>';
});

scissorImage.addEventListener("click", () => {
  yourChoice.innerHTML = '<img src="./assets/makas.png"></img>';
});
