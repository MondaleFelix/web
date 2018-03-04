var express = require("express");
var app = express();


// Tells express to serve out content from public directory
app.use(express.static("public"));

// Tells express that the pages we render are ejs files
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.get("/fallinlovewith/:thing", function(req,res){
  var thing = req.params.thing;
  res.render("love", {thingVar: thing})
});

app.get("/posts", function(req,res){
  var posts = [
    {title: "Post 1", author: "Suzy"},
    {title: "Post 2", author: "Lazy"},
    {title: "Post 3", author: "Turdy"}
  ];
  res.render("posts", {posts: posts})
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
})
