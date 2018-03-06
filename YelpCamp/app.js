var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
  { name : "Salmon Creek", image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
  { name : "Granite Hill", image: "https://acadiamagic.com/1170px/blackwoods-1197.jpg"},
  { name : "Mountain Goat's Rest", image: "http://avaloncampground.com/wp-content/uploads/2013/07/Avalon-Campground-table-woods.png"}
]

// Syntax to use body-parser in our app
app.use(bodyParser.urlencoded({extended: true}));

// Tells express that we are serving ejs files
app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){

  res.render("campgrounds", {campgrounds: campgrounds});
});

// Same URL as the get route to follow REST convention

app.post("/campgrounds", function(req,res){

  // Grabs data sent in the "new.ejs" form
  var name = req.body.name;
  var image = req.body.image;
  var newCampgrounds = { name : name , image: image};
  campgrounds.push(newCampgrounds);
  res.redirect("/campgrounds")
  // get data from form and add to campgrounds array

  // redirect back to campgrounds page
});

app.get("/campgrounds/new", function(req,res){
  res.render("new.ejs");
  campgrounds.push("")
})

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
