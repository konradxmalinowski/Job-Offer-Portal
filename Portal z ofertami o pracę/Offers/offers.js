const offersWrapper = document.querySelector('.offers-wrapper');
const loadMoreButton = document.querySelector('.load-more-button');
const offers = document.querySelectorAll('.offer');

async function loadOffers(max) {
    try {
        const response = await fetch('./list_of_offers-en.json');
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const data = await response.json();

        data.forEach((offer, idx) => {
            if (idx < max) {
                const offerDiv = document.createElement('div');
                offerDiv.classList.add('offer', `offer${idx + 1}`);

                offerDiv.addEventListener("mouseover", () => {
                    offerDiv.style.animation = "zoomIn .3s ease-in-out 1 normal forwards";
                });

                offerDiv.addEventListener("mouseout", () => {
                    offerDiv.style.animation = "zoomOut .3s ease-in-out 1 normal forwards";
                });

                const name = document.createElement('h2');
                name.textContent = offer.name;
                name.style.fontWeight = '700';

                const companyName = document.createElement('p');
                companyName.textContent = offer.companyName;
                companyName.style.fontWeight = '600';
                companyName.style.fontSize = '17px';

                const employmentType = document.createElement('p');
                employmentType.textContent = offer.employmentType;
                employmentType.style.color = 'var(--clr-grey)';

                const place = document.createElement('p');
                place.textContent = offer.place;

                const button = document.createElement('button');
                button.textContent = 'Apply';

                offerDiv.appendChild(name);
                offerDiv.appendChild(employmentType);
                offerDiv.appendChild(companyName);
                offerDiv.appendChild(place);
                offerDiv.appendChild(button);

                offersWrapper.appendChild(offerDiv);
            }
        });
    } catch (error) {
        console.error('Error loading offers:', error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadOffers(12);
});

loadMoreButton.addEventListener('click', (event) => {
    loadOffers(100);
    event.target.style.display = 'none';
});