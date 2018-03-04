var express = require("express");
var app = express();
var request = require("request");

// Tells express that we are serving ejs files
app.set("view engine", "ejs");

// Root page will serve the search Page
app.get("/", function(req,res){
  res.render("search")
});

//
app.get("/results", function(req,res){
  // grabs the query made in the form
  var query = req.query.search
  // instantiates the url to request from
  var url = "http://omdbapi.com/?s="+ query +"&apikey=thewdb";

  request(url, function(error,response, body){
    if(!error && response.statusCode == 200){
      // Converts the body from string to JSON
      var data = JSON.parse(body)
      // renders the results page and serves the data we recieved from the request
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
