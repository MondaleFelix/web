var express = require("express");
var app = express();


// Tells express that we are serving ejs files
app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){
  var campgrounds = [
    { name : "Salmon Creek", image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
    { name : "Granite Hill", image: "https://acadiamagic.com/1170px/blackwoods-1197.jpg"},
    { name : "Mountain Goat's Rest", image: "http://avaloncampground.com/wp-content/uploads/2013/07/Avalon-Campground-table-woods.png"}
  ]

  res.render("campgrounds", {campgrounds: campgrounds});
});


app.listen(3000, function(){
  console.log("Listening on port 3000");
});
