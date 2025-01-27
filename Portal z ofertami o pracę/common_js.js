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