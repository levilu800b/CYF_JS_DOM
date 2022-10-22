// callback function

// function callback() {
// 	console.log('I am callback function');
// }

// function that takes a callback function as an argument
// function higherOrderFunction(callback) {
// 	console.log('I am higher order function');
// 	callback();
// }

// call the higher order function and pass the callback function as an argument

// higherOrderFunction(callback);

// function greeting(name) {
// 	console.log('Hi ' + name);
// }

// function someOtherJobs(callback) {
	// get the data from server
// 	callback()
// }

// someOtherJobs(greeting);

// EXERCISE
// Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
// Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.

const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];

function changeColor() {
	const colorIndex = parseInt(Math.random() * colors.length);
	body.style.backgroundColor = colors[colorIndex];
}

setInterval(changeColor, 1000);

