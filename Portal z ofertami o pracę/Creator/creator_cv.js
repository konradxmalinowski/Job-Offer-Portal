// form inputs
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const telInput = document.querySelector("#telephone");
const birthInput = document.querySelector("#birth-date");
const skillsInput = document.querySelector("#skills");
const createCVButton = document.querySelector("#create-button");

// choose color
const colorItems = document.querySelectorAll(".color");
const images = document.querySelectorAll(".image");
images[0].style.display = 'block';
let checked = new Array(5).fill(false);

// messages content
const namesOfIndexEN = ['name', 'surname', 'skills', 'birth date', 'email', 'phone number'];
const namesOfIndexPL = ['imię', 'nazwisko', 'umiejętności', 'data urodzin', 'email', 'number telefonu'];


colorItems.forEach((color, idx) => {
    color.addEventListener("click", () => {
        images.forEach((image) => (image.style.display = "none"));
        images[idx].style.display = "block";
        checked.fill(false, 0);
        checked[idx] = true;
        console.log(checked);
    });
});

createCVButton.addEventListener("click", () => {
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
}); 