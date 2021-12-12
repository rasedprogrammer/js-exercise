function giveMovieRating(movieRating) {
  if (movieRating >= 7) {
    return console.log("Oh It's A Good Movie");
  } else {
    return console.log("Noo, It's A Bad One!");
  }
}
// console.log(giveMovieRating(8));

function giveMovieRating2(movieRating2) {
  let movieResult;
  if (movieRating2 >= 7) {
    movieResult = "Oh It's A Good Movie";
  } else {
    movieResult = "Noo, It's A Bad One!";
  }
  return movieResult;
}

console.log(giveMovieRating2(8));
