let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');

let loginButton = document.getElementById('login-button');

loginButton.onclick = () => {
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{5,100}$/;
    if (passwordInput.value === '') {
        showMessage("Enter correct password");
        return;
    }

    if (!passwordRegEx.test(passwordInput.value)) {
        showMessage("Password: 1 lower, 1 upper, 1 digit, 1 special ($@!%*?&_), 5-100 chars.");
        return;
    }

    let emailRegEx = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    if (emailInput.value === '') {
        showMessage('Enter value in email field');
        return;
    }

    if (!emailRegEx.test(emailInput.value)) {
        showMessage("Enter correct email");
        return;
    }

    showMessage('Approved. Login successful');
};