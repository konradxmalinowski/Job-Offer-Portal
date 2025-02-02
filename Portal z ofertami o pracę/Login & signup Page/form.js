let registers = {
    registerWrapper1: document.querySelector('.create-account1'),
    registerWrapper2: document.querySelector('.create-account2')
}

let inputs = {
    emailInput: document.querySelector('#email'),
    passwordInput: document.querySelector('.password')
}

let buttons = {
    continueButton: document.getElementById('continue-button'),
    createAccountButton: document.querySelector('#create-account-button')
}

buttons.continueButton.onclick = function () {
    if (inputs.emailInput.value != '') {
        setTimeout(() => {
            registers.registerWrapper1.style.opacity = '0';
            registers.registerWrapper1.style.transition = '0.7s ease-in-out 0s';
        }, 0);

        setTimeout(() => {
            registers.registerWrapper1.style.display = 'none';
        }, 710);

        setTimeout(() => {
            registers.registerWrapper2.style.display = 'block';
        }, 720);

        setTimeout(() => {
            registers.registerWrapper2.style.opacity = '1';
            registers.registerWrapper2.style.transition = '0.7s ease-in-out 0s';
        }, 730);
    }
    else {
        showMessage('Enter email field');
    }
}


buttons.createAccountButton.addEventListener('click', () => {
    if (inputs.passwordInput.value != '') {
        showMessage("Password generated");
    }
});