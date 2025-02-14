/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let dailySectionHTML = document.createElement('section');
const dailyOfferObject = [
    {
        name: 'Leader',
        place: 'Warszawa, Kraków',
        salary: '4000 - 5000PLN',
        daysOfWork: 'Monday - Fridays, work shifts'
    }
];
const dailyApplyButtons = document.querySelectorAll('.day-offer-card > div > button');
const dailyApplyButtonsExit = document.querySelector('.daily-apply-button');

function createDailyApplySection() {
    if (dailySectionHTML.children.length != 0)
        dailySectionHTML.style.display = 'flex';
    else {
        dailySectionHTML.classList.add('apply-section');
        dailySectionHTML.innerHTML = returnApplyHTML(dailyOfferObject);
        document.body.appendChild(dailySectionHTML);
    }

    document
        .querySelectorAll('body > *:not(.apply-section, script')
        .forEach((el) => {
            el.style.filter = 'blur(7px)';
        });

    handleDailyApplyClick();

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideDailyApplySection();
            changeFocus();
        }
        else {
            console.error('error')
        }
    })
}

function changeFocus() {
    dailyApplyButtons.forEach(button => {
        button.blur();
    })
}

function hideDailyApplySection() {
    dailySectionHTML.style.display = 'none';
    document
        .querySelectorAll('body > *:not(.apply-section, script')
        .forEach((el) => {
            el.style.filter = 'none';
        });

}

function handleDailyApplyClick() {
    let exitButton = document.querySelector('#exit');
    exitButton.addEventListener('click', hideDailyApplySection);
}

dailyApplyButtons.forEach(button => {
    button.addEventListener('click', createDailyApplySection);
});
