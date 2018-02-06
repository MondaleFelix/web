var age = prompt("What is your age?");

if(age < 1){
  console.log("Not a valid age");
} else if(age === 21){
  console.log("Happy 21st Birthday!");
} else if(age % 2 === 1){
  console.log("Your age is odd");
}
