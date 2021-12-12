function giveMovieRating(movieRating) {
  if (movieRating >= 7) {
    return console.log("Oh It's A Good Movie");
  } else {
    return console.log("Noo, It's A Bad One!");
  }
}
console.log(giveMovieRating(8));
