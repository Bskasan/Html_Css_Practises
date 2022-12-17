for (let index = 0; index <= 10; index++) {
  if (index > 5) {
    break;
  }
  console.log(index);
}

console.log("-------------------------------");

for (let index = 0; index <= 10; index++) {
  if (index % 2 == 0) {
    continue;
  }
  console.log(index);
}
