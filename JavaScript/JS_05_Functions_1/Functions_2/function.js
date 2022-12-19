function Sum(a, b) {
  const result = a + b;
  console.log(` ${a} + ${b} = ${result}`);
  console.log("Result -> ", result);
}

Sum(3, 2);
Sum(2, 32);

// Sum(2+3);
// 5 + undefined = NaN, because a = 5, but b = undefined. That's why we get answer like NaN.
// NaN is Not a Number.
//In JavaScript, NaN stands for Not a Number. It represents a value which is not a valid number. It can be used to check whether a number entered is a valid number or not a number. To assign a variable to NaN value, we can use one of the two following ways.

//var a = NaN
//var a = Number.NaN
// ------------------------------------------------------------------------ //
