/* ------------------ WHILE LOOP ------------------- */

let finishLine = 10;
let runner = 0;

while (runner <= finishLine) {
  //console.log(`Runner at ${runner} meter.`);
  runner++; // To avoid of infinite loop.
}

/* ------------------------------------------------ */

let sum = 0;
let num = 0;

while (num < 6) {
  sum += num;

  console.log(`The sum is ${sum}`);
  num++;
}
