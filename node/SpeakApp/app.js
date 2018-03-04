var express = require("express");
var app = express();

app.get("/", function(req ,res){
  res.send("Hello there, welcome to my page");
});

app.get("/speak/:animal", function(req,res){
  var animal = req.params.animal;
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof"
  }
  res.send("The " + animal + " says " + sounds[animal]);
});

app.get("/repeat/:string/:times", function(req, res){
  var string = req.params.string
  var times = req.params.times
  var message = ""
  for(var i = 0; i < times; i++){
    message += string + " "
  }
  res.send(message)
});

//
app.listen(3000, function(){
  console.log("Server started");
});
