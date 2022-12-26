function oldSchool(pre, uname) {
  console.log(`Good morning ${pre}.${uname}`);
}

oldSchool("Mr", "Bekir");

// Arrow functions usually defined like const.

const newApp = (pre, uname, uSurname) =>
  console.log(`Good morning ${pre}. ${uname} ${uSurname}`);

newApp("Mr", "Bekir", "Kasan");

function addOS(num1, num2) {
  let result = num1 + num2;
  return result;
}

console.log(addOS(3, 2));

//---------Arrow Function--------//
const addNew = (num1, num2) => num1 + num2;

console.log(addNew(7, 2));

//------------------------------------------------//

const findMaxNewApp = (num1, num2) => (num1 > num2 ? num1 : num2);

function findMaxOldApp(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// NEW APPROACH //
console.log(findMaxNewApp(20, 30));
// OLD APPROACH //
console.log(findMaxOldApp(20, 30));

//------------------------------------------------//
//Practise 1

/*
    function oddOrEven(num){
        return num % 2 == 0 ? 'ODD' : 'EVEN';
    }

    Old Approach 
*/

//Arrow Function Approach
// You should use let or constant, you will see the benefit of this when you have a chance work with long code at your company. You will be working with another developers.
const oddOrEven = (num) => (num % 2 == 0 ? "Even" : "Odd");

console.log(oddOrEven(5));
console.log(oddOrEven(8));
console.log("-----------------------------------------");
//------------------------------------------------//
//Practise 2

//Old Approach
function isRiskyOA(smoking, alcohol, over65) {
  return smoking || alcohol || over65 ? "There is Risk" : "No Risk";
}

function isRiskyOA2(smoking, alcohol, over65) {
  if (smoking || alcohol || over65) {
    return "There is Risk";
  } else {
    return "No Risk";
  }
}
console.log(isRiskyOA(false, false, false));
console.log(isRiskyOA(true, false, false));
console.log(isRiskyOA2(true, false, false));

//New Approach
const isRiskyNA = (smoking, alcohol, over65) =>
  smoking || alcohol || over65 ? "There is Risk" : "No Risk";

console.log(isRiskyNA(true, false, false));
console.log(isRiskyNA(false, false, false));
