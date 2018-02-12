var button = document.querySelector("button");
var p = document.querySelector("p");
var h1 = document.querySelector("h1");

// Changes the p tag once button is pressed
function buttonPressed(){
  p.textContent = "I have been pressed";
}

// Added an event listener to the button
button.addEventListener("click", buttonPressed);
h1.addEventListener("click", function(){
  alert("YOU  CLICKED ME");
});
