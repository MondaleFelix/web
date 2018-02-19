// Select the element
var button = document.querySelector("button");
var isRed = true;


// Manipulate

// button.addEventListener("click", function(){
//   if(isRed){
//     document.body.style.backgroundColor = "red"
//   } else {
//     document.body.style.backgroundColor = "white"
//   }
//   isRed = !isRed;
// });


button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});
