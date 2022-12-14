let score = +prompt("Enter your score: ");

let letter;

if (score >= 90) {
  letter = "A";
} else if (score >= 80) {
  letter = "B";
} else if (score >= 70) {
  letter = "C";
} else if (score >= 55) {
  letter = "D";
} else {
  letter = "F";
}

console.log(`Your score is ${score}, and grade is ${letter}`);



