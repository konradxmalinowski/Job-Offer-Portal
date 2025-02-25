let browserDefaultLanguage = localStorage.getItem('lang') ?? navigator.language;

// menu
const navbarMenu = document.querySelectorAll('.navbar');
const navbarButtons = document.querySelectorAll('.navbar-button');

function hideNavbar() {
  navbarMenu.forEach((navbar) => {
    navbar.classList.add('hidden-navbar');
    navbar.style.display = 'none';
  });
}

window.addEventListener('resize', () => {
  hideNavbar();
});

hideNavbar();

function toggleClass() {
  navbarMenu.forEach((navbar) => {
    let isClass = navbar.classList.contains('shown-navbar');

    if (isClass) {
      setTimeout(() => {
        navbar.classList.add('hidden-navbar');
        navbar.classList.remove('shown-navbar');
      }, 0);

      setTimeout(() => {
        navbar.style.display = 'none';
      }, 750);
    } else {
      setTimeout(() => {
        navbar.classList.add('shown-navbar');
        navbar.classList.remove('hidden-navbar');
      }, 0);

      setTimeout(() => {
        navbar.style.display = 'block';
      }, 750);
    }
  });
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// change language
const langSets = document.querySelectorAll('.lang-set');
const langlistMenu = document.querySelectorAll('.lang-list');
const arrowDown = document.querySelector('img[alt="arrow-down"]');
const langlist = document.querySelectorAll('.lang-list span');

function toggleLang() {
  langlistMenu.forEach((langlist) => {
    if (window.getComputedStyle(langlist).display === 'none') {
      langlist.style.display = 'block';
    } else {
      langlist.style.display = 'none';
    }
  });

  if (window.getComputedStyle(arrowDown).rotate === '0deg') {
    arrowDown.style.animation = 'rotate1 .5s ease-in-out 0s normal forwards';
  }
  if (window.getComputedStyle(arrowDown).rotate === '180deg') {
    arrowDown.style.animation = 'rotate2 .5s ease-in-out 0s normal forwards';
  }
}

// change language switch
langSets.forEach((langSet) => {
  langSet.onclick = toggleLang;
});

navbarButtons.forEach((navbarButton) => {
  navbarButton.onclick = toggleClass;
});

langlist.forEach((lang, idx) => {
  lang.onclick = () => {
    changeLanguage(idx);
  };
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});

function showMessage(warning, data = '') {
  let message = document.createElement('section');
  message.setAttribute('class', 'message');

  const messageWarning = document.createElement('span');
  messageWarning.textContent = warning;

  const bold = document.createElement('span');
  bold.classList.add('bold');
  bold.textContent = data;

  message.append(messageWarning, bold);

  document.body.appendChild(message);
  setTimeout(() => {
    message.style.animation = 'show .4s ease-in-out 0s normal forwards';
  }, 0);
  setTimeout(() => {
    message.style.animation = 'hide .4s ease-in-out 0s normal forwards';
  }, 2000);
  setTimeout(() => {
    document.body.removeChild(message);
  }, 3000);
}
