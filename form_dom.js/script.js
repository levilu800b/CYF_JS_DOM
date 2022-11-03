// get form element using getElementById
// let form = document.getElementById('myForm');
// let input = form.getElementsByTagName('input');
// let submitBtn = document.getElementById('submit');

// // Create a function to validate the form data and add event listener to the submit button
// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     if  (input[0].value == "" && input[1].value == "") {
//         console.log('Please enter a name and email');
//     } else if (input[0].value == "") {
//         console.log('Please enter your name');
//     } else if (input[1].value == "") {
//         console.log('Please enter your email');
//     } else {
//         console.log('form submitted');
//     }
// })

function validateForm() {
    let form = document.getElementById('myForm');
    let input = form.getElementsByTagName('input');
    let submitBtn = document.getElementById('submit');

    // Create a function to validate the form data and add event listener to the submit button
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if  (input[0].value == "" && input[1].value == "") {
            console.log('Please enter a name and email');
        } else if (input[0].value == "") {
            console.log('Please enter your name');
        } else if (input[1].value == "") {
            console.log('Please enter your email');
        } else {
            console.log('form submitted');
        }
    })
}

validateForm();