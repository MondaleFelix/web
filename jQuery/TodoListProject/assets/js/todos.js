// Check off specific todos by clicking
$("li").on("click", function(){
  $(this).toggleClass("completed");
})

// Click on X to delete todo
$("span").on("click", function(event){

  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // Stops all parent events from firing off
  event.stopPropagation();

})


$("input[type='text']").keypress(function(event) {
  // Checks to see if key pressed is equal to enter
  if(event.which === 13){
    // Grabs new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // Create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
