const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar-button');
const langSet = document.querySelector('.lang-set');
const langlist = document.querySelector('.lang-list');
const offersWrapper = document.querySelector('.offers-wrapper');
const loadMoreButton = document.querySelector('.load-more-button');
const findOffersButton = document.querySelector('.search-button');
const searchInputs = document.querySelectorAll('.search-inputs');
const answers = document.querySelectorAll('.answers');
const customLists = document.querySelectorAll('.custom-list');
const selects = document.querySelectorAll('.select');

let searchFilters = [];

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
async function loadOffers(max, place = '', companyName = '', jobName = '') {
    offersWrapper.innerHTML = '';

    try {
        const response = await fetch('./list_of_offers-en.json');
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const data = await response.json();

        data
            .filter((offer, idx) =>
                idx < max &&
                (place === '' || offer.place.toLowerCase().includes(place.toLowerCase())) &&
                (companyName === '' || offer.companyName.toLowerCase().includes(companyName.toLowerCase())) &&
                (jobName === '' || offer.name.toLowerCase().includes(jobName.toLowerCase()))
            )
            .forEach((offer, idx) => {
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

                const companyNameElem = document.createElement('p');
                companyNameElem.textContent = offer.companyName;
                companyNameElem.style.fontWeight = '600';
                companyNameElem.style.fontSize = '17px';

                const employmentType = document.createElement('p');
                employmentType.textContent = offer.employmentType;
                employmentType.style.color = 'var(--clr-grey)';

                const placeElem = document.createElement('p');
                placeElem.textContent = offer.place;

                const button = document.createElement('button');
                button.textContent = 'Apply';

                offerDiv.append(name, employmentType, companyNameElem, placeElem, button);
                offersWrapper.appendChild(offerDiv);
            });
    } catch (error) {
        console.error('Error loading offers:', error);
    }
}

loadMoreButton.addEventListener('click', () => {
    searchFilters = [
        answers[2]?.textContent.trim() || '',
        answers[1]?.textContent.trim() || '',
        answers[0]?.textContent.trim() || '',
    ];

    loadOffers(12, searchFilters[0], searchFilters[1], searchFilters[2]);
});

findOffersButton.addEventListener('click', () => {
    findOffersButton.addEventListener('click', () => {
        searchFilters = [
            answers[2]?.textContent.trim() || '',
            answers[1]?.textContent.trim() || '',
            answers[0]?.textContent.trim() || '',
        ];


        loadOffers(12, searchFilters[0], searchFilters[1], searchFilters[2]);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    loadOffers(12);
});

loadMoreButton.addEventListener('click', (event) => {
    searchFilters = Array.from(answers).map(answer => answer.textContent.trim() || '');
    loadOffers(12, searchFilters[0], searchFilters[1], searchFilters[2]);
    event.target.style.display = 'none';
});


searchInputs.forEach((searchInput, idx) => {
    searchInput.addEventListener('click', () => {
        customLists[idx].style.display = customLists[idx].style.display === 'block' ? 'none' : 'block';
    });
});

selects.forEach(select => {
    select.addEventListener('click', () => {
        if (select.classList.contains('custom-list1-select')) {
            answers[0].textContent = select.textContent.trim();
        } else if (select.classList.contains('custom-list2-select')) {
            answers[1].textContent = select.textContent.trim();
        } else if (select.classList.contains('custom-list3-select')) {
            answers[2].textContent = select.textContent.trim();
        }
    });
});
