// EXERCISE
// Write JavaScript below that logs:
// all the "p" element nodes of the document, --> should log a list of nodes with a length of 6
const pElements = document.querySelectorAll('p');
// the first div element node --> should log the ".site-header" node
const firstDiv = document.querySelector('div');
// the element with id "jumbotron-text" --> should log the "#jumbotron-text" node
const jumbotronText = document.querySelector('#jumbotron-text');
// all the "p" elements contained inside the .primary-content element node --> should log a list of nodes with a length of 3
const primaryContent = document.querySelector('.primary-content');

// create new h1 and add new text
const newH1 = document.createElement('h1');
newH1.innerText = 'Hello World';

// // add new h1 to the body
document.body.appendChild(newH1);

const addPara = document.querySelector('#page-header');
addPara.innerHTML = 'hschbjhsdcnvjfsvb';
appendChild(addPara);
