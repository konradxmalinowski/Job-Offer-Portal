const descriptionsHTML = document.querySelectorAll('.description');
const buttons = document.querySelectorAll('.about-text > button');

function Developer(name, aboutWork, aboutLife, aboutSkills) {
    return {
        name,
        aboutWork,
        aboutLife,
        aboutSkills
    }
}

let descriptions = [];
descriptions['Konrad'] = [
    'Jestem web developerem specjalizującym się w technologiach frontendowych i backendowych. Tworzę nowoczesne strony internetowe oraz aplikacje webowe.',
    'Poza programowaniem interesuję się nowinkami technologicznymi i rozwijam swoje portfolio. Lubię także fotografię i gry komputerowe.',
    'Moje umiejętności obejmują HTML, CSS, JavaScript, React, a także zarządzanie serwerami i bazami danych. Ciągle rozwijam swoje kompetencje.'
];
descriptions['Szymon'] = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam1.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam2.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam3.',
];

const Szymon = new Developer('Szymon', ...descriptions['Szymon']);
const Konrad = new Developer('Konrad', ...descriptions['Konrad']);


buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        if (idx === 0) descriptionsHTML[0].textContent = Konrad.aboutWork;
        else if (idx === 1) descriptionsHTML[0].textContent = Konrad.aboutLife;
        else if (idx === 2) descriptionsHTML[0].textContent = Konrad.aboutSkills;
    });
});

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        if (idx === 3) descriptionsHTML[1].textContent = Szymon.aboutWork;
        else if (idx === 4) descriptionsHTML[1].textContent = Szymon.aboutLife;
        else if (idx === 5) descriptionsHTML[1].textContent = Szymon.aboutSkills;
    });
});