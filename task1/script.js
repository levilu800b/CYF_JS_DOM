// Try this question tonight.
// "Here you are given some names of different fruits:
// const fruits = ["banana", "Melon", "Mango"]
// You task:
// Using javascript, create a UL and have each li hold a value from the array.
// e.g <li> banana </li>
// Each li tag is to have a font size of 1em with margin bottom of 1em (using js of course)
// Onclick, change the text color of each element to a random color.
// Bonus...
// Add a delete button with each li and if that button gets clicked, remove the li from the ul

// Hint: You can use the following to get a random color:

// Solution 1 

// const fruits = ["banana", "Melon", "Mango"];
// const unOrderedList = document.createElement('ul');
// fruits.forEach(fruit => {
//     const list = document.createElement('li');
//     list.textContent = fruit;
//     list.style.fontSize = '1em';
//     list.style.marginBottom = '1em';
//     list.addEventListener('click', () => {
//         list.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//     })
//     unOrderedList.appendChild(list);
// })
// document.body.appendChild(unOrderedList);

// // Bonus
// const deleteButton = document.createElement('button');
// const deleteButtonText = document.createTextNode('Delete');
// deleteButton.appendChild(deleteButtonText);
// deleteButton.addEventListener('click', () => {
//     unOrderedList.remove();
// })
// unOrderedList.appendChild(deleteButton);

// Solution 2

const fruits = ['banana', 'Melon', 'Mango'];

const ul = document.createElement('ul');
document.body.appendChild(ul);
for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement('li');
    li.textContent = fruits[i];
    li.style.fontSize = '1em';
    li.style.marginBottom = '1em';
    li.addEventListener('click', () => {
        li.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    ul.appendChild(li);
}

// Bonus
const deleteButton = document.createElement('button');
const deleteButtonText = document.createTextNode('Delete');
deleteButton.appendChild(deleteButtonText);
deleteButton.addEventListener('click', () => {
    ul.remove();
});
ul.appendChild(deleteButton);