// define variables
const btn = document.querySelector('#sign-btn');
// inputs
const userName = document.querySelector('#un');
const password = document.querySelector('#pw');

const form = document.querySelector('#form');

// event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(userName.value.trim() === '' || password.value.trim() === '') {
        alert('Please enter Username/Password');
        return false;
    } else if (userName.value.trim().length<6) {
        alert('Username need to be greater than 6 characters');
        return false;
    } else if (password.value.trim().length<8) {
        alert('Password need to be greater than 8 characters');
        return false;
    } else {
        location.replace('dashboard.html');
        return true;
    }

});