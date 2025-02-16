/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function createOfferCard(offer, idx) {
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('offer', `offer${idx + 1}`);
    offerDiv.setAttribute('title', browserDefaultLanguage.includes('pl') ? 'Super oferta' : 'Super offer');
    offerDiv.addEventListener('mouseover', () => {
        offerDiv.style.animation = 'zoomIn .3s ease-in-out 1 normal forwards';
    });
    offerDiv.addEventListener('mouseout', () => {
        offerDiv.style.animation = 'zoomOut .3s ease-in-out 1 normal forwards';
    });
    offersData.push(offer);

    const name = document.createElement('h2');
    name.textContent = offer.name;

    const companyNameElem = document.createElement('p');
    companyNameElem.textContent = offer.companyName;

    const employmentType = document.createElement('p');
    employmentType.textContent = offer.employmentType;

    const placeElem = document.createElement('p');
    placeElem.textContent = offer.place;

    const button = document.createElement('button');
    button.classList.add('apply-button-created');
    button.textContent = browserDefaultLanguage.includes('pl') ? 'Aplikuj' : 'Apply';

    offerDiv.append(name, companyNameElem, employmentType, placeElem, button);
    offersWrapper.appendChild(offerDiv);
}

function clearOldOffers() {
    offersWrapper.innerHTML = '';
    offersData = [];
    createdApplySections = [];
}

function clearInputs() {
    options.forEach((option, idx) => {
        if (browserDefaultLanguage.includes('pl')) {
            if (idx === 0) option.textContent = 'Stanowisko...';
            else if (idx === 1) option.textContent = 'Firma...';
            else if (idx === 2) option.textContent = 'Lokalizacja...';
        }
        else if (browserDefaultLanguage.includes('en')) {
            if (idx === 0) option.textContent = 'Position...';
            else if (idx === 1) option.textContent = 'Company...';
            else if (idx === 2) option.textContent = 'Localization...';
        }
    });

    loadOffers(12);
}

async function loadOffers(max, place = '', companyName = '', jobName = '') {
    clearOldOffers();
    [jobName, companyName, place] = checkInputContent(jobName, companyName, place);

    const data = await fetchOffers();
    let numberOfOffers = 0;

    data
        .filter(
            (offer) =>
                (place === '' ||
                    offer.place.toLowerCase().includes(place.toLowerCase())) &&
                (companyName === '' ||
                    offer.companyName
                        .toLowerCase()
                        .includes(companyName.toLowerCase())) &&
                (jobName === '' ||
                    offer.name.toLowerCase().includes(jobName.toLowerCase()))
        )
        .forEach((offer, idx) => {
            numberOfOffers++;
            if (numberOfOffers > max) {
                return;
            }

            createOfferCard(offer, idx);
        });
}


function checkInputContent(jobName, companyName, place) {
    if (jobName === 'Stanowisko...' || jobName === 'Position...') jobName = '';
    if (companyName === 'Firma...' || companyName === 'Company...') companyName = '';
    if (place === 'Lokalizacja...' || place === 'Localization...') place = '';

    return [jobName, companyName, place];
}

async function fetchOffers() {
    try {
        const response = await fetch(`./list_of_offers-${browserDefaultLanguage.includes('pl') ? 'pl' : 'en'}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }

        return response.json();
    }
    catch (error) {
        console.log(error);
    }
}