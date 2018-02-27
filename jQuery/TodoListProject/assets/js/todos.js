// Check off specific todos by clicking
$("li").on("click", function(){
  $(this).toggleClass("completed");
})

// Click on X to delete todo
S("span").on("click", function(event){


  // Stops all parent events from firing off
  event.stopPropagation();

})
