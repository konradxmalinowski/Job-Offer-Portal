const registerWrapper1 = document.querySelector('.create-account1');
const registerWrapper2 = document.querySelector('.create-account2');
const continueButton = document.querySelector('#continue-button');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('.password');
const createAccountButton = document.querySelector('#create-account-button');

continueButton.onclick = function () {
    if (emailInput.value != '') {
        setTimeout(() => {
            registerWrapper1.style.opacity = '0';
            registerWrapper1.style.transition = '0.7s ease-in-out 0s';
        }, 0);

        setTimeout(() => {
            registerWrapper1.style.display = 'none';
        }, 710);

        setTimeout(() => {
            registerWrapper2.style.display = 'block';
        }, 720);

        setTimeout(() => {
            registerWrapper2.style.opacity = '1';
            registerWrapper2.style.transition = '0.7s ease-in-out 0s';
        }, 730);
    }
    else {
        showMessage('Enter email field');
    }
}


createAccountButton.addEventListener('click', () => {
    if (passwordInput.value != '') {
        showMessage("Password generated");
    }
})