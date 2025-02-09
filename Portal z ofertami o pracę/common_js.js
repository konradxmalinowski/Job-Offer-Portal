// menu
const navbarMenu = document.querySelectorAll('.navbar');
const navbarButtons = document.querySelectorAll('.navbar-button');

navbarMenu.forEach((navbar) => {
  navbar.classList.add('hidden-navbar');
});

function toggleClass() {
  navbarMenu.forEach((navbar) => {
    let isClass = navbar.classList.contains('showed-navbar');

    if (isClass) {
      setTimeout(() => {
        navbar.classList.add('hidden-navbar');
        navbar.classList.remove('showed-navbar');
      }, 0);

      setTimeout(() => {
        navbar.style.display = 'none';
      }, 750);
    } else {
      setTimeout(() => {
        navbar.classList.add('showed-navbar');
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

function toggleLang() {
  langlistMenu.forEach((langlist) => {
    if (window.getComputedStyle(langlist).display === 'none') {
      langlist.style.display = 'block';
    } else {
      langlist.style.display = 'none';
    }
  });
}

// change language switch
langSets.forEach((langSet) => {
  langSet.onclick = toggleLang;
});

navbarButtons.forEach((navbarButton) => {
  navbarButton.onclick = toggleClass;
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
