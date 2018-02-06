var secretNumber = 20;

var guessedNumber = prompt("Guess a number homie");

if(secretNumber === Number(guessedNumber)){
  console.log("You got it right")
} else if(guessedNumber > secretNumber){
  console.log("Aim lower")
} else if(guessedNumber < secretNumber){
  console.log("Aim higher")
} else {
  console.log("Guess a number you twat")
}
