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
