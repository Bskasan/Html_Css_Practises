const randomNum = Math.ceil(Math.random() * 100); //to find a integer part of decimal number

console.log(randomNum);

let found = false;
let guess = 0;
100;
let lives = 5;

while (!found && lives > 0) {
  guess = +prompt(`Enter a number... You have ${lives} chance left...`);

  if (guess > randomNum) {
    alert("Enter something smaller...");
    lives--;
  } else if (guess < randomNum) {
    alert("Enter something bigger...");
    lives--;
  } else {
    found = true;
    alert("YOU FOUND IT, OWW YEEAH!!!");
  }
}

if (!found) {
  alert(`SORRY BUT YOU LOST.. THE RANDOM NUMBER WAS ${randomNum}`);
}
