var movies = [
  {
    title: "Spiderman",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Trolls 2",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Paddington",
    rating: 2,
    hasWatched: false
  },
];

movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched === false){
    result += "not ";
  }
  result += "watched " + movie.title + " - " + movie.rating + " stars";
  console.log(result);
})
