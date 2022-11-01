// get all element id using querySelector

let userName = document.querySelector('#name')
let userEmail = document.querySelector('#email')
let submitBtn = document.querySelector('#submit')

// Create a function to validate the form data and add event listener to the submit button

function validateForm () {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault()
        if (userName.value === '' || userEmail.value === '') {
            console.log('Please fill out the form')
        } else {
            console.log('Form Submitted')
        }
    })
}

validateForm()
