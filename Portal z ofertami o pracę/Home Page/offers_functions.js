/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function createOfferCard(offer, idx) {
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('offer', `offer${idx + 1}`);
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
    button.textContent = 'Apply';

    offerDiv.append(name, companyNameElem, employmentType, placeElem, button);
    offersWrapper.appendChild(offerDiv);
}

function clearOldOffers() {
    offersWrapper.innerHTML = '';
    offersData = [];
    createdApplySections = [];
}

async function loadOffers(max, place = '', companyName = '', jobName = '') {
    clearOldOffers();
    if (jobName === 'Stanowisko...') jobName = '';
    if (companyName === 'Firma...') companyName = '';
    if (place === 'Lokalizacja...') place = '';

    try {
        const response = await fetch('./list_of_offers-en.json');
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const data = await response.json();
        let numberOfOffers = 0;

        data
            .filter(
                (offer) =>
                    numberOfOffers <= max &&
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
                createOfferCard(offer, idx);
            });
    } catch (error) {
        console.error('Error loading offers:', error);
    }
}
