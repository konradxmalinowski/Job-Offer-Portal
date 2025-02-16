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


// Touch events for mobile devices
let isDown = false;
let startX;
let scrollLeft;

dailyOffersWrapper.addEventListener('touchstart', (event) => {
    isDown = true;
    startX = event.touches[0].pageX - dailyOffersWrapper.offsetLeft;
    scrollLeft = dailyOffersWrapper.scrollLeft;
});

dailyOffersWrapper.addEventListener('touchmove', (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.touches[0].pageX - dailyOffersWrapper.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    dailyOffersWrapper.scrollLeft = scrollLeft - walk;
});

dailyOffersWrapper.addEventListener('touchend', () => {
    isDown = false;
});

dailyOffersWrapper.addEventListener('touchcancel', () => {
    isDown = false;
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
