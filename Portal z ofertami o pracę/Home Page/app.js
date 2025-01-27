const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar-button');

const langSet = document.querySelector('.lang-set');
const langlist = document.querySelector('.lang-list');

// FIXME: create function fetchLanguages, get all HTML elements with content to translate
function changeLanguage() {
    const browserDefaultLanguage = navigator.language;
}

function toggleLang() {
    if (window.getComputedStyle(langlist).display === 'none') {
        langlist.style.display = 'block';
    } else {
        langlist.style.display = 'none';
    }
}

function toggleClass() {
    let isClass;
    setTimeout(() => {
        navbar.classList.toggle('showed-hidden-navbar');
    }, 0);

    setTimeout(() => {
        isClass = (navbar.classList.contains('showed-hidden-navbar')) ? true : false;
    }, 0)

    setTimeout(() => {
        navbar.style.display = (isClass) ? 'block' : 'none';
    }, 1000);

    if (isClass) {
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 700);
    }
}


langSet.onclick = toggleLang;
navbarButton.onclick = toggleClass




// offers searching and loading
// ------------------

const offersWrapper = document.querySelector('.offers-wrapper');
const loadMoreButton = document.querySelector('.load-more-button');
const offers = document.querySelectorAll('.offer');
const findOffersButton = document.querySelector('.search-button');

const searchInputs = document.querySelectorAll('.search-inputs');
let searchFilters = [];
const selects = document.querySelectorAll('.select');
const customLists = document.querySelectorAll('.custom-list');
const answers = document.querySelectorAll('.answers');

async function loadOffers(max, place, companyName, jobName) {
    offers.forEach((offer) => offer.remove());
    jobName ??= '';
    place ??= '';
    companyName ??= '';

    console.log(max, place, companyName, jobName);

    try {
        const response = await fetch('./list_of_offers-en.json');
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const data = await response.json();
        data.forEach((offer, idx) => {
            if (idx < max) {

                // && offer.place.includes(place) && offer.companyName.includes(companyName) && offer.name.includes(jobName)
                console.log(offer.name.includes(jobName));
                console.log(offer.companyName.includes());
                console.log(offer.name.includes(jobName));
                //  && offer.name === name
                console.log(offer);

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

searchInputs.forEach((searchInput, idx) => {
    searchInput.addEventListener('click', () => {
        if (window.getComputedStyle(customLists[idx]).display === 'block') {
            customLists[idx].style.display = 'none';
        } else {
            customLists[idx].style.display = 'block';
        }
    });
});

selects.forEach(select => {
    select.addEventListener('click', () => {
        if (select.classList.contains('custom-list1-select')) {
            answers[0].textContent = select.textContent;
        }
        else if (select.classList.contains('custom-list2-select')) {
            answers[1].textContent = select.textContent;
        }
        else if (select.classList.contains('custom-list3-select')) {
            answers[2].textContent = select.textContent;
        }
    })
});

findOffersButton.addEventListener('click', () => {
    searchFilters = [];
    answers.forEach(answer => {
        searchFilters.push(answer.textContent);
    });
    console.log(searchFilters);

    loadOffers(12, ...searchFilters);

});
