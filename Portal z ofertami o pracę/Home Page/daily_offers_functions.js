/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


// daily offers
const dailyOffersWrapper = document.querySelector('.daily-offers-wrapper');

dailyOffersWrapper.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
        dailyOffersWrapper.scrollLeft += 100;
    } else {
        dailyOffersWrapper.scrollLeft -= 100;
    }
});



let dailySectionHTML = document.createElement('section');
const dailyOfferObjectEN = [
    {
        name: 'Manager',
        place: 'Warszawa, Kraków',
        salary: '4000 - 5000PLN',
        daysOfWork: 'Monday - Fridays, work shifts'
    }
];
const dailyOfferObjectPL = [
    {
        name: 'Manager',
        place: 'Warszawa, Kraków',
        salary: '4000 - 5000PLN',
        daysOfWork: 'Poniedziałek - Piątek, zmiany'
    }
];
const dailyApplyButtons = document.querySelectorAll('.day-offer-card > div > button');
const dailyApplyButtonsExit = document.querySelector('.daily-apply-button');

function createDailyApplySection() {
    if (dailySectionHTML.children.length != 0)
        dailySectionHTML.style.display = 'flex';
    else {
        dailySectionHTML.classList.add('apply-section');
        dailySectionHTML.innerHTML = browserDefaultLanguage.includes('pl') ? returnApplyHTML(dailyOfferObjectPL) : returnApplyHTML(dailyOfferObjectEN);
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
