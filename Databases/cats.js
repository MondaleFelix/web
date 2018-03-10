var mongoose = require("mongoose");

// Will search for a database called cat_app and will create it if not found
mongoose.connect("mongodb://localhost/cat_app");

// Pattern for the cat data
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


// adding a new cat to the DB

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(err, cat){
//   if(err){
//     console.log("Something wen wrong")
//   } else{
//     console.log("Cat has been saved to DB")
//     console.log(cat)
//   }
// })

// Shows all cats in database
Cat.find({}, function(err, cats){
  if(err){
    console.log("Something went wrong");
  }
})
