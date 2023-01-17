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

//******* VARIABLES *********//
const yourChoice = document.getElementById("your-choice"); //? Store our choice
const pcChoice = document.getElementById("pc-choice"); //? Store pc choice
const select = document.querySelector(".select"); //? to get select div

const scoreYou = document.getElementById("you"); //? For our score
const scorePc = document.getElementById("pc"); //? For pc score
const domTopScore = document.querySelector(".top-score");

// Modal Selectors
const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

//For result message
const final = document.getElementById("final");

let userSelect;
let pcRandom;

//******* EVENT LISTENERS *********//

//*** FOR SELECTING ***/
select.addEventListener("click", (e) => {
  //console.log(e.target.className);
  //console.log(e.target.getAttribute("alt"));
  if (e.target.getAttribute("alt")) {
    userSelect = e.target.getAttribute("alt");
    yourChoice.innerHTML = `<img src="./assets/${userSelect}.png"></img>`;
    pc();
  }
});

//*** FOR MODAL BUTTON TO CLOSE THE WINDOW && RELOADING THE PAGE ***/
modalBtn.addEventListener("click", () => {
  //modalEl.style.display = "none";
  modalEl.classList.remove("show");
  window.location.reload();
});

//******* FUNCTIONS *********//
const pcArr = ["stone", "paper", "scissor"];

//*** RESULT FUNCTION ***/
function result() {
  switch (userSelect) {
    case "stone":
      if (pcRandom == "paper") {
        Lost();
      } else if (pcRandom == "scissor") {
        Win();
      }
      break;
    case "paper":
      if (pcRandom == "scissor") {
        Lost();
      } else if (pcRandom == "stone") {
        Win();
      }
      break;
    case "scissor":
      if (pcRandom == "stone") {
        Lost();
      } else if (pcRandom == "paper") {
        Win();
      }
      break;
    default:
      break;
  }

  //! FOR DRAW CHECK
  if (userSelect == pcRandom) {
    Draw();
  }

  //! CHECK IF WE WIN (!!!FOR RESULT MESSAGE CHECK!!!)
  if (scoreYou.innerText == "10") {
    final.innerHTML = `💃 You Win🕺`;
    document.querySelector(".modal").style.backgroundColor = "#5AB7AC";
    modalBtn.style.color = "#5AB7AC";
    TopScoreCheck();
  }

  //! TO DISPLAY OUR MODAL SCREEN (DISPLAY: NONE -> DISPLAY: BLOCK)
  if (scorePc.innerText == "10" || scoreYou.innerText == "10") {
    Modal();
  }
}
//*****************************/

//*** RANDOM FUNCTION ***/
function pc() {
  let pcRandomNum = Math.floor(Math.random() * 3);
  pcRandom = pcArr[pcRandomNum];
  console.log(pcRandomNum);
  console.log(pcRandom);
  pcChoice.innerHTML = `<img src="./assets/${pcRandom}.png"></img>`;
  result();
}

//*** LOST FUNCTION ***/
function Lost() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Lost";
  containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
  resultDiv.style.backgroundColor = "#fb778b";
  scorePc.innerText++;
}

//*** WIN FUNCTION ***/
function Win() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Win";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
  resultDiv.style.backgroundColor = "#5AB7AC";
  scoreYou.innerText++;
}

//*** DRAW FUNCTION ***/
function Draw() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "It's a draw";
  containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
  resultDiv.style.backgroundColor = "#FFC538";
}

//*** MODAL USAGE FUNCTION ***/
function Modal() {
  modalEl.classList.add("show");
}

//*** TO STORE OUR HIGHSCORE ***/
//To store the top score by using local Storage.
let storagedScore = localStorage.getItem("highScore");
let topScore; //Top score that will be seen on the screen.

if (storagedScore) {
  topScore = `10 - ${storagedScore}`;
} else {
  topScore = "0 - 0";
}

domTopScore.innerText = topScore;

function TopScoreCheck() {
  storagedScore || localStorage.setItem("highScore", scorePc.innerText);

  if (storagedScore >= scorePc.innerText) {
    localStorage.setItem("highScore", +scorePc.innerText);
  }
}
