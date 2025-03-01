const descriptionsHTML = document.querySelectorAll('.description');
const buttons = document.querySelectorAll('.about-text > button');

class Developer {
  constructor(name, aboutWork, aboutLife, aboutSkills, music) {
    this.name = name;
    this.aboutWork = aboutWork;
    this.aboutLife = aboutLife;
    this.aboutSkills = aboutSkills;
    this.music = music;
  }
}

function createDevelopers() {
  let descriptions = [];

  descriptions['Szymon'] = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam1.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam2.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat fugit, voluptatem ratione illum quidem qui fuga magni nobis magnam3.',
    '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4nOsnnEnpvHx49mkCx0Omu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
  ];

  if (browserDefaultLanguage.includes('pl')) {
    descriptions['Konrad'] = [
      'Jestem web developerem specjalizującym się w technologiach frontendowych i backendowych. Tworzę nowoczesne strony internetowe i aplikacje webowe.',
      'Oprócz programowania interesuję się innowacjami technologicznymi i rozwijam swoje portfolio. Lubię także fotografię i gry komputerowe.',
      'Moje umiejętności obejmują HTML, CSS, JavaScript, React, a także zarządzanie serwerami i bazami danych. Stale rozwijam swoje kompetencje.',
      '<iframe style="border-radius:12px;" src="https://open.spotify.com/embed/track/3dxiWIBVJRlqh9xk144rf4?utm_source=generator&theme=0" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    ];
  } else {
    descriptions['Konrad'] = [
      'I am a web developer specializing in front and backend technologies. I create modern websites and web applications.',
      'In addition to programming, I am interested in technological innovations and develop my portfolio. I also like photography and computer games.',
      'My skills include HTML, CSS, JavaScript, React, as well as servers and database management. I am constantly developing my competences.',
      '<iframe style="border-radius:12px;" src="https://open.spotify.com/embed/track/3dxiWIBVJRlqh9xk144rf4?utm_source=generator&theme=0" width="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    ];
  }

  let Szymon = new Developer('Szymon', ...descriptions['Szymon']);
  let Konrad = new Developer('Konrad', ...descriptions['Konrad']);

  handleDeveloperButtonClick(Konrad, Szymon);

  return [Szymon, Konrad];
}

let [Konrad, Szymon] = createDevelopers();

function handleDeveloperButtonClick(Konrad, Szymon) {
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
}
