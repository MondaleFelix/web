var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

app.get("/dog", function(req, res){
  res.send("MEOWW");
});

app.get('/r/:something', function(req,res){
  var name = req.params.something;
  res.send("Welcome to " + name);
})


// REDIRECTS USER THIS WHEN THE TRY TO ACCES A ROUTE NOT DEFINED
app.get("*", function(req, res){
  res.send("YOU ARE A STAR")
});

app.listen(3000, function(){
  console.log("Listening on port 3000 fool");
})
