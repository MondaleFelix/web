var p1Button = document.getElementById("p1");
var p1Display = document.getElementById("p1Display");
var p1Score = 0;

var p2Button = document.getElementById("p2");
var p2Display = document.getElementById("p2Display");
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
  if(!gameover){
    p1Score++;

  }
});

p2Button.addEventListener("click", function(){
  p2Score++;
  p2Display.textContent = p2Score;
});
