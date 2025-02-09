const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const birthInput = document.querySelector('#birth-date');
const telInput = document.querySelector('#telephone');
const skillsInput = document.querySelector("#skills");

// choose color
const colorItems = document.querySelectorAll(".color");
const images = document.querySelectorAll(".image");
images[0].style.display = 'block';
let checked = new Array(5).fill(false);

// messages content
const namesOfIndexEN = ['name', 'surname', 'skills', 'birth date', 'email', 'phone number'];

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
const telRegEx = /^(\+\d{1,3}\s?)?(\(?\d{1,4}\)?[\s.-]?)?[\d\s.-]{5,15}$/;
const nameRegEx = /^[a-z0-9(\s)]{3,30}$/i;

const crateButton = document.querySelector('#create-button');

function validateInputValue(regEx, data, message) {
    if (data === '') {
        showMessage("Every field must be filled");
        return;
    }

    if (!regEx.test(data)) {
        showMessage(message);
        return;
    }
}

function validateData() {
    validateInputValue(emailRegEx, emailInput.value, 'Invalid email format.');
    validateInputValue(telRegEx, telInput.value, 'Phone: +XX XXX XXX XXX or similar.');
    // 
    validateInputValue(dateRegEx, birthInput.value, 'Date: YYYY-MM-DD or similar.');
    validateInputValue(nameRegEx, nameInput.value, 'Name: 3-30 letters/numbers.');
    validateInputValue(nameRegEx, surnameInput.value, 'Surname: 3-30 letters/numbers.');

    showMessage('Correct data');
}

crateButton.onclick = validateData;

function handleColorClick() {
    colorItems.forEach((color, idx) => {
        color.addEventListener("click", () => {
            images.forEach((image) => (image.style.display = "none"));
            images[idx].style.display = "block";
            checked.fill(false, 0);
            checked[idx] = true;
        });
    });
}

handleColorClick();

function createCV() {
    let userData = [];
    let invalidData = [];

    userData.push(nameInput.value, surnameInput.value, skillsInput.value, birthInput.value, emailInput.value, telInput.value);
    userData = userData.map((inputValue) => {
        if (typeof inputValue === 'string') return inputValue.replaceAll(' ', '');
    });

    if (userData.some((inputValue) => inputValue === '')) {
        userData.forEach((data, idx) => {
            if (data == '') invalidData.push(namesOfIndexEN[idx]);
        });
        showMessage(`Enter data in field:`, `${[...invalidData].join(', ')}`);
    }
}

crateButton.onclick = createCV;

function checkPhoneCorrectness() {
    telInput.addEventListener("keydown", () => {
        telInput.value = telInput.value.replace(/[^\d-+()]/, '');
    });
}

checkPhoneCorrectness();