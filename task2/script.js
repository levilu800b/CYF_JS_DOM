// TASK 1

// Change every first and last element in these uls to whatever text content you wish
// You have 3 uls and inside each ul you have 3 lis. Change the first and third li in each ul

// 1. Get the uls
const allUls = document.querySelectorAll('ul');

// 2. Loop through the uls
for (let i = 0; i < allUls.length; i++) {
// 3. Get the lis
  const all_lis = allUls[i].querySelectorAll('li');
  // 4. Change the first and third li
  all_lis[0].textContent = 'First';
  all_lis[2].textContent = 'Third';
}

console.log(allUls);


// TASK 2

// change the li's in the ul's text content to any random or number you want when you click on the button
// you have 3 ul's and inside each ul you have 3 li's

// 1. Get the button
// const button = document.querySelector('button');

// // 2. Add event listener to the button
// button.addEventListener('click', () => {
//   // 3. Get the uls
//   const allUls = document.querySelectorAll('ul');

//   // 4. Loop through the uls
//   for (let i = 0; i < allUls.length; i++) {
//     // 5. Get the lis
//     const all_lis = allUls[i].querySelectorAll('li');

//     // 6. Loop through the lis
//     for (let j = 0; j < all_lis.length; j++) {
//       // 7. Change the li's text content
//       all_lis[j].textContent = Math.floor(Math.random() * 100);
//     }
//   }
// });