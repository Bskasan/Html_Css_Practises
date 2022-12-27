console.log('Exercise - 01');

// Old/traditional function 
function convertCurrency(amount, rate){
    let result = amount * rate;
    return result;
}


// Arrow Function
const convertCurrency2 = (amount, rate) => amount * rate;
//const convertCurrency2 = (amount, rate) => {return amount * rate};

console.log(convertCurrency(1000, 1.5));
console.log(convertCurrency2(1000, 1.5));

console.log('--------------');
console.log('Exercise - 02');

function numChar(str, letter){
    let result = str.split('letter').length;
    return result;
}

console.log(numChar('Clarusway', 'a'))

