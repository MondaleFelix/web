var colors = ["red", "orange", "yellow", "blue"];
var numbers = [1,2, 6 ,3,4,5];

// // Write a function sumArray() that accepts an array of numbers
// // and returns the sum of all numbers in the array

// function sumArray(arr){
//   var sum = 0;
//   for(var i = 0;  i < arr.length;  i++){
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray(numbers))


// function printReverse(arr){
//   for(var i = arr.length - 1 ; i >= 0; i--){
//     console.log(arr[i])
//   }
// }

// printReverse(numbers);


// Write a function isUniform() which takes an array as an arguement and returns
// if all elements in the array are identical

// function isUniform(arr){
//   var result = false
//   for(var i = 0, i < arr.length, i++){
//     if(arr.[0] === arr[i])
//       result = true
//   }
//   return result
// }

// Write a function max() that accepts n array of numbers and returns the maximum number the array

function max(arr){
  arr.sort();
  return arr[arr.length - 1];
}

console.log(max(numbers));
