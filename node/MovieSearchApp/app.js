var express = require("express");
var app = express();
var request = require("request");

// Tells express that we are serving ejs files
app.set("view engine", "ejs");



app.get("/results", function(req,res){
  request("http://omdbapi.com/?s=california&apikey=thewdb", function(error,response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body)
      res.render("results", {data: data});
    }
  });
})

// app.get("*", function(req,res) {
//   res.send("This page is not found");
// })

app.listen(3000, function(){
  console.log("listening on port 3000");
});
