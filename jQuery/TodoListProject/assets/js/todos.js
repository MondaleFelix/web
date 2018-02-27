// Check off specific todos by clicking
  // Listens for when li is clicked within ul
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})

// Click on X to delete todo
  // only listens for when span is clicked within a ul
$("ul").on("click", "span" ,  function(event){
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
