var colors = ["red", "orange", "yellow", "blue"];
var numbers = [1,2,3,4,5];

function printReverse(arr){
  for(var i = arr.length - 1 ; i >= 0; i--){
    console.log(arr[i])
  }
}

printReverse(numbers);
