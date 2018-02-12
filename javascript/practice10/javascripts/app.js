var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list"){
    listTodo()
  } else if(input === "new") {
    addTodo()
  } else if(input === "delete") {
    deleteTodo()
  }

  input = prompt("What would you like to do?");
}

console.log("You have quit")


function listTodo(){
  console.log("**********")
  todos.forEach(function(todo, index){
    console.log(index + " :" + todo);
  })
  console.log("**********")
}

function addTodo(){
  var newTodo = prompt("What do you want to add?");
  todos.push(newTodo);
  console.log("Added Todo")
}

function deleteTodo(){
  var todoToDelete = prompt("Enter index of todo to delete");
  todos.splice(todoToDelete,1);
  console.log("Deleted todo")
}
