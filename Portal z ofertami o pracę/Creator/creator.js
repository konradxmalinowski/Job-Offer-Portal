/* eslint-disable no-undef */
// inputs
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
const namesOfIndexPL = ['imię', 'nazwisko', 'umiejętności', 'data urodzenia', 'email', 'numer telefonu'];

// Regular expressions
const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
const telRegEx = /^(\+\d{1,3}\s?)?(\(?\d{1,4}\)?[\s.-]?)?[\d\s.-]{5,15}$/;
const nameRegEx = /^[a-z0-9(\s)]{3,30}$/i;

// buttons
const crateButton = document.querySelector('#create-button');

function validateInputValue(regEx, data, message) {
    if (data === '') {
        browserDefaultLanguage.includes('pl') ? showMessage("Wypełnij wszystkie pola") :
            showMessage("Every field must be filled");
        return;
    }

    if (!regEx.test(data)) {
        showMessage(message);
        return;
    }
}

function validateData() {
    if (browserDefaultLanguage.includes('pl')) {
        validateInputValue(emailRegEx, emailInput.value, 'Niepoprawny format email.');
        validateInputValue(telRegEx, telInput.value, 'Telefon: +XX XXX XXX XXX lub podobnie.');
        validateInputValue(dateRegEx, birthInput.value, 'Data: YYYY-MM-DD lub podobnie.');
        validateInputValue(nameRegEx, nameInput.value, 'Imię: 3-30 liter/cyfr.');
        validateInputValue(nameRegEx, surnameInput.value, 'Nazwisko: 3-30 liter/cyfr.');

        showMessage('Poprawne dane');
        return;
    }

    validateInputValue(emailRegEx, emailInput.value, 'Invalid email format.');
    validateInputValue(telRegEx, telInput.value, 'Phone: +XX XXX XXX XXX or similar.');
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
            if (data == '') {
                invalidData.push(browserDefaultLanguage.includes('pl') ? namesOfIndexPL[idx] : namesOfIndexEN[idx]);
            }
        });

        if (browserDefaultLanguage.includes('pl')) {
            showMessage(`Wprowadź dane w pola:`, `${[...invalidData].join(', ')}`);
            return;
        }

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