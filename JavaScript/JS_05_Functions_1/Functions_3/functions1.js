//let add = function (num1, num2) {
//  const result = num1 + num2;
//return result;
//};

//const result1 = add(4, 2);
//const result2 = add(8, 2);

//console.log(result1, result2);

// -------------------------------------------------------------------------  //

function ReverseText(str){
    let newString = "";

    for(let i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }

    return newString;

    //Another solution
    // let result = "";
    // for(let i = 0; i < str.length; i++){
    //    result += str[i]
    //}
    // return result;
}

var reversedMyName = ReverseText("Bekir");

console.log(reversedMyName);

