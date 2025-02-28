let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');

let loginButton = document.getElementById('login-button');

loginButton.onclick = () => {
  let emailRegEx = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  if (emailInput.value === '' || !emailRegEx.test(emailInput.value)) {
    showMessage(
      browserDefaultLanguage.includes('pl')
        ? 'Wprowadź poprawny email'
        : 'Enter correct email'
    );
    return;
  }

  let passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{5,100}$/;
  if (passwordInput.value === '') {
    showMessage(
      browserDefaultLanguage.includes('pl')
        ? 'Wprowadź hasło'
        : 'Enter correct password'
    );
    return;
  }

  if (!passwordRegEx.test(passwordInput.value)) {
    showMessage(
      browserDefaultLanguage.includes('pl')
        ? 'Hasło: 1 duża, 1 mała litera, 1 cyfra i 1 znak specjalny'
        : 'Password: 1 lower, 1 upper, 1 digit, 1 special ($@!%*?&_), 5-100 chars.'
    );
    return;
  }

  showMessage(
    browserDefaultLanguage.includes('pl')
      ? 'Udało się! Wprowadzono poprawne dane!'
      : 'Success! Correct data entered!'
  );
};
