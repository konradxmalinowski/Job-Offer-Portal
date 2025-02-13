const descriptionsHTML = document.querySelectorAll('.description');
const buttons = document.querySelectorAll('.about-text > button');

function Developer(name, aboutWork, aboutLife, aboutSkills, music) {
    return {
        name,
        aboutWork,
        aboutLife,
        aboutSkills,
        music
    }
}

let descriptions = [];
descriptions['Konrad'] = [
    'Jestem web developerem specjalizującym się w technologiach frontendowych i backendowych. Tworzę nowoczesne strony internetowe oraz aplikacje webowe.',
    'Poza programowaniem interesuję się nowinkami technologicznymi i rozwijam swoje portfolio. Lubię także fotografię i gry komputerowe.',
    'Moje umiejętności obejmują HTML, CSS, JavaScript, React, a także zarządzanie serwerami i bazami danych. Ciągle rozwijam swoje kompetencje.',
    '<iframe style="border-radius:12px;" src="https://open.spotify.com/embed/track/3dxiWIBVJRlqh9xk144rf4?utm_source=generator&theme=0" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
];
descriptions['Szymon'] = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam1.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam2.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam3.',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3dxiWIBVJRlqh9xk144rf4?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
];

const Szymon = new Developer('Szymon', ...descriptions['Szymon']);
const Konrad = new Developer('Konrad', ...descriptions['Konrad']);


buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        // Konrad
        if (idx === 0) descriptionsHTML[0].textContent = Konrad.aboutWork;
        else if (idx === 1) descriptionsHTML[0].textContent = Konrad.aboutLife;
        else if (idx === 2) descriptionsHTML[0].textContent = Konrad.aboutSkills;
        else if (idx === 3) descriptionsHTML[0].innerHTML = Konrad.music;

        //Szymon 
        else if (idx === 4) descriptionsHTML[1].textContent = Szymon.aboutWork;
        else if (idx === 5) descriptionsHTML[1].textContent = Szymon.aboutLife;
        else if (idx === 6) descriptionsHTML[1].textContent = Szymon.aboutSkills;
        else if (idx === 7) descriptionsHTML[1].innerHTML = Szymon.music;
    });
});
