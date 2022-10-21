// // EXERCISE
// // Write JavaScript below that logs:
// // all the "p" element nodes of the document, --> should log a list of nodes with a length of 6
// const pElements = document.querySelectorAll('p');
// // the first div element node --> should log the ".site-header" node
// const firstDiv = document.querySelector('div');
// // the element with id "jumbotron-text" --> should log the "#jumbotron-text" node
// const jumbotronText = document.querySelector('#jumbotron-text');
// // all the "p" elements contained inside the .primary-content element node --> should log a list of nodes with a length of 3
// const primaryContent = document.querySelector('.primary-content');

// // create new h1 and add new text
// const newH1 = document.createElement('h1');
// newH1.innerText = 'Hello World';

// // // add new h1 to the body
// document.body.appendChild(newH1);

// const addPara = document.querySelector('#page-header');
// addPara.innerHTML = 'hschbjhsdcnvjfsvb';
// appendChild(addPara);


// This webpage displays a quiz about animal classification, with three possible answers. We've stored them into 3 variables and declared CSS rules for 2 classes at the top. Use JS to add the 'right-answer' class to rightAnswer and the 'wrong-answer' class to wrongAnswer1 and wrongAnswer2.

// var answers = document.querySelectorAll('#answers li');
// var rightAnswer = answers[0];
// rightAnswer.className = 'right-answer';
// var wrongAnswer1 = answers[1];
// wrongAnswer1.className = 'wrong-answer';
// var wrongAnswer2 = answers[2];
// wrongAnswer2.className = 'wrong-answer';

// This is an inside story about the true feelings of Oh Noes and Winston, and in this challenge, you'll fill in the crucial lines. For this first step, use innerHTML to set what Oh Noes says, and include a strong or em tag somewhere in it.

// var ohnoesSays = document.getElementById('ohnoes-says');
// ohnoesSays.innerHTML = 'I <strong>hate</strong> you, Winston!';
// var winstonSays = document.getElementById('winston-says');
// winstonSays.innerHTML = 'I <em>love</em> you, Oh Noes!';

// In this step, use textContent to show what Winston says - make sure you don't include any HTML tags in it.

// var winstonSays = document.getElementById('winston-says');
// winstonSays.textContent = 'I love you, Oh Noes!';

// This webpage is just a blank universe, and you'll fill it with planets and moons in this challenge. In this first step, use JavaScript to create a div using createElement, assign it the 'planet' class, set a nice background color for it, and finally append it to the body.

// var planet = document.createElement('div');
// planet.className = 'planet';
// planet.style.backgroundColor = 'red';
// document.body.appendChild(planet);

// In this step, create a div using createElement, assign it the 'moon' class, and append it to the planet you created in the previous step.

// var moon = document.createElement('div');
// moon.className = 'moon';
// planet.appendChild(moon);

// In this challenge, you'll make it so the user (you!) can pet the cat and see it meow. In this first step, find the cat image element and store it in a variable.

// var cat = document.getElementById('cat-pic');

// Now, define a callback function that changes the inner text of the 'cat-chat' div to say 'Meow', or whatever you think cats say when you pet them.

// var onCatClick = function() {
//   var catChat = document.getElementById('cat-chat');
//   catChat.innerHTML = 'Meow';
// };

// Finally, assign the callback function as the event listener for the 'click' event for the cat image.

// cat.addEventListener('click', onCatClick);

// Make sure you click the cat to check that it works! Cats love being petted. :)

// This webpage puts a mustache image on top of a cat image when the user clicks it, but it always lands up at 100 pixels down and 100 pixels from the left. Change the callback function to use the event properties to position the mustache according to where the user clicks

// Make sure you click around to see how the mustache looks. You might want to add/subtract a little from the event properties, since the image is being positioned according to its left corner, not center.

// var catPic = document.getElementById('cat-pic');
// var onCatClick = function (e) {
// 	var stashePic = document.getElementById('mustache-pic');
// 	stashePic.style.top = e.clientY + 'px';
//     stashePic.style.left = e.clientX + 'px';
// };
// catPic.addEventListener('click', onCatClick);

// This webpage has the start of a Mad Libs game. If you've never played it, that's a game where you fill in a bunch of blanks of different word types, and then a story is generated based on those words, and sometimes the story is surprisingly funny.

//In this step, you're going to finish the game logic in the event listener: find the value of each of the word inputs, and then write out a story that uses each of the values. Make sure you check the console for errors when you play the game.

// var libButton = document.getElementById('lib-button');
// var libIt = function () {
// 	var storyDiv = document.getElementById('story');
//     var noun = document.getElementById('noun').value;
//     var adjective = document.getElementById('adjective').value;
//     var person = document.getElementById('person').value;
//     storyDiv.innerHTML = person + ' really likes ' + adjective + ' ' + noun + '.';
// };
// libButton.addEventListener('click', libIt);