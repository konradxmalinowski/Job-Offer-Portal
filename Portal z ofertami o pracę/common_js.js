// menu
const navbarMenu = document.querySelectorAll('.navbar');
const navbarButtons = document.querySelectorAll('.navbar-button');

function toggleClass() {
    navbarMenu.forEach((navbar) => {
        navbar.classList.toggle('showed-hidden-navbar');
        const isClass = navbar.classList.contains('showed-hidden-navbar');

        navbar.style.display = isClass ? 'block' : 'none';
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
    })
}


// change language switch
langSets.forEach(langSet => {
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
    })
});


function showMessage(warning, data = '') {
    let message = document.createElement("section");
    message.setAttribute("class", "message");

    const messageWarning = document.createElement('span');
    messageWarning.textContent = warning;

    const bold = document.createElement('span');
    bold.classList.add('bold');
    bold.textContent = data;

    message.append(messageWarning, bold);

    document.body.appendChild(message);
    setTimeout(() => {
        message.style.animation = "show .4s ease-in-out 0s normal forwards";
    }, 0);
    setTimeout(() => {
        message.style.animation = "hide .4s ease-in-out 0s normal forwards";
    }, 2000);
    setTimeout(() => {
        document.body.removeChild(message);
    }, 3000);
}