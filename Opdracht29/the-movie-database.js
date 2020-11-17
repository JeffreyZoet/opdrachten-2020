// Create an object to store the following information about your favorite movie: 
// Title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: 
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

const favoriteMovie = function (movieTitle, movieDuration, movieStars) {
    let title = 'Puff the Magic Dragon';
    let duration = 30;
    let names = ['Puff', ' Jackie', ' Living Sneezes'];
    let movie = title + ' lasts for ' + duration + ' minutes. ' + 'Stars: are ' + names + '.';
    console.log(movie);
};
favoriteMovie();