//Task 1
// Write JavaScript below that logs:
// 1. all the "p" element nodes of the document,

const pElements = document.querySelectorAll('p');
const pElementsArray = Array.from(pElements);
// should log a list of nodes with a length of 6
console.log(pElements[2]);

//     2. the first div element node
const firstDiv = document.querySelector('div');
//     --> should log the ".site-header" node
console.log(firstDiv);

//     3. the element with id "jumbotron-text"
const jumbotronText = document.querySelector('#jumbotron-text');
//     --> should log the "#jumbotron-text" node
console.log(jumbotronText);

//     4. all the "p" elements of contained inside  the .primary-content element node
const primaryContent = document.querySelector('.primary-content');
//     --> should log a list of nodes with a length of 3
console.log(primaryContent.querySelectorAll('p'));

// Task 2
// ======

// When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"

const alertButton = document.querySelector('#alertBtn');
alertButton.addEventListener('click', function () {
	alert('Thanks for visiting Bikes for Refugees!');
});


// Task 3
// =======

// Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
const changeColorButton = document.querySelector('#bgrChangeBtn');
changeColorButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
});


// Task 4
// ======

// When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
const addTextButton = document.querySelector('#addTextBtn');
addTextButton.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'Read more below.';
    const buttons = document.querySelector('.buttons');
    buttons.appendChild(newParagraph);
});


// Task 5
// ======

// When the 'Larger links!' button is clicked, the text of all links on the page should increase.
const largerLinksButton = document.querySelector('#largerLinksBtn');
largerLinksButton.addEventListener('click', function () {
    const links = document.querySelectorAll('a');
    const linksArray = Array.from(links);
    linksArray.forEach(function (link) {
        link.style.fontSize = '30px';
    });
}
);