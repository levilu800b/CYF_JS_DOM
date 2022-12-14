/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
- On the form with id #add-movies, add a "submit" event listener
- When the button is clicked you need to:
    - Read all input field values and create a new movie object literal with title, director, type and haveWatched properties
    - Push the new object on the movies array 
    - Display the updated list of movies on your page

TIP: Use the functions you created on tasks 1-3
================
*/

const movies = [
	{
		title: 'Color Out of Space',
		director: 'Richard Stanley',
		type: 'sci-fi',
		haveWatched: true,
	},
	{
		title: 'A Twelve-Year Night',
		director: 'Álvaro Brechner',
		type: 'horror',
		haveWatched: false,
	},
	{
		title: 'The Whistlers',
		director: 'Corneliu Porumboiu',
		type: 'comedy',
		haveWatched: true,
	},
	{
		title: 'The Invisible Man',
		director: 'Leigh Whannell',
		type: 'horror',
		haveWatched: false,
	},
];

// Task 1: create showMovies function
function showMovies() {
	// add code here
	// Create a function called "showMovies" that
// - iterates through the "movies" array and
// - for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
// - it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"



}

// Task 2: create a new movie object for your favorite movie
const myFavMovie = {
	// add code here
};

// Task 2-3: create addMovies function
function addMovie(movie, callback) {
	// add code here
}

// Task 4 - **Extra**
