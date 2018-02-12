// 1) Write a function that evaluates if a number is true or false

// function isEven(x){
//   return x % 2 === 0;
// }

// console.log(isEven(9));

// 2) Factorial function

// function factorial(x){
//   var y = 1;
//   while(x !== 0){
//     y *= x
//     x--;
//   }
//   return y;
// }

// console.log(factorial(0))

function kebabToSnake(word){
  return word.replace(/-/gi,"_");
}

console.log(kebabToSnake("Mondale"))

