// daily offers
const dailyOffersWrapper = document.querySelector('.daily-offers-wrapper');
dailyOffersWrapper.scrollLeft = 2000;

// desktop
dailyOffersWrapper.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
        dailyOffersWrapper.scrollLeft += 125;
    }
    else {
        dailyOffersWrapper.scrollLeft -= 125;
    }
});


// mobile
let touchStartX = 0;
let touchEndX = 0;

dailyOffersWrapper.addEventListener('touchStart', (event) => {
    touchStartX = event[0].clientX;
});

dailyOffersWrapper.addEventListener('touchMove', (event) => {
    touchEndX = event[0].clientX;
});

dailyOffersWrapper.addEventListener('touchEnd', () => {
    let distance = touchStartX - touchEndX;

    if (distance > 50) {
        dailyOffersWrapper.scrollLeft += 100;
    }
    else if (distance < -50) {
        dailyOffersWrapper.scrollLeft -= 100;
    }
})



/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// offers
const offersWrapper = document.querySelector('.offers-wrapper');
const loadMoreOffersButton = document.querySelector('.load-more-button');
const applyButtons = document.getElementsByClassName('apply-button-created');
let offersData = [];
let createdApplySections = [];

function structureOfApplySection(offersData, idx) {
    return `
       <div class="exit"><img src="images/exit.png" alt="exit icon" id="exit"></div>
        <h1 class="job-title">${offersData[idx].name}</h1>
        <div class="basic-info">
            <span class="days">
                <img src="images/calendar-icon.png" alt="calendar icon"> ${offersData[idx]?.daysOfWork}
            </span>
            <span class="location">
                <img src="images/location-icon.png" alt="location icon"> ${offersData[idx]?.place}
            </span>
            <span class="people">
                <img src="images/people-icon.png" alt="people icon"> ${offersData[idx]?.salary}
            </span>
        </div>  
    
        <div class="fill-data-section">
            <span>Fill out the information below</span>
    
            <form action="" method="post" class="apply-form">
                <label for="full-name-input" class="grey bold">Full name <span class="star">*</span></label>
                <input type="text" name="full-name-input" id="full-name-input" placeholder="Enter full name">
    
                <label for="email-input" class="grey bold">Email address <span class="star">*</span></label>
                <input type="email" name="email-input" id="email-input" placeholder="Enter email address">
    
                <label for="phone-number-input" class="grey bold">Phone number <span class="star">*</span></label>
                <input type="tel" name="phone-number-input" id="phone-number-input" placeholder="Enter phone number">
    
                <label for="cv-upload" class="grey bold">Upload CV <span class="star">*</span></label>
                <input type="file" name="cv-upload" id="cv-upload">
    
                <label for="linkedin" class="grey bold">LinkedIn profile</label>
                <input type="url" name="linkedin" id="linkedin" placeholder="Enter LinkedIn profile link">
    
                <label for="portfolio" class="grey bold">Portfolio link</label>
                <input type="url" name="portfolio" id="portfolio" placeholder="Enter portfolio link">
    
                <label for="cover-letter" class="grey bold">Cover letter</label>
                <textarea name="cover-letter" id="cover-letter" placeholder="Write a short cover letter"></textarea>
    
                <button type="submit" class="apply-submit">Apply now</button>
            </form>
        </div>
    `;
}

function createApplySection(idx) {
    const section = document.createElement('section');
    section.className = 'apply-section';
    section.innerHTML = structureOfApplySection(offersData, idx)

    document.body.appendChild(section);
    createdApplySections[idx] = section;
    document.querySelectorAll('body > *:not(.apply-section, script').forEach(el => {
        el.style.filter = 'blur(7px)';
    });

}

function hideApplySection(idx) {
    if (createdApplySections[idx]) {
        createdApplySections[idx].remove();
    }
    document.querySelectorAll('body > *:not(.apply-section').forEach(el => {
        el.style.filter = 'none';
    });
}

function structureOfOffer(offer, idx) {
    const offerDiv = document.createElement('div');
    offerDiv.classList.add('offer', `offer${idx + 1}`);
    offerDiv.addEventListener("mouseover", () => {
        offerDiv.style.animation = "zoomIn .3s ease-in-out 1 normal forwards";
    });
    offerDiv.addEventListener("mouseout", () => {
        offerDiv.style.animation = "zoomOut .3s ease-in-out 1 normal forwards";
    });
    offersData.push(offer);

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
    button.classList.add('apply-button-created');
    button.textContent = 'Apply';

    offerDiv.append(name, employmentType, companyNameElem, placeElem, button);
    offersWrapper.appendChild(offerDiv);
}

async function loadOffers(max, place = '', companyName = '', jobName = '') {
    offersWrapper.innerHTML = '';
    offersData = [];
    createdApplySections = [];

    try {
        const response = await fetch('./list_of_offers-en.json');
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const data = await response.json();

        data
            .filter((offer, idx) =>
                idx <= max &&
                (place === '' || offer.place.toLowerCase().includes(place.toLowerCase())) &&
                (companyName === '' || offer.companyName.toLowerCase().includes(companyName.toLowerCase())) &&
                (jobName === '' || offer.name.toLowerCase().includes(jobName.toLowerCase()))
            )
            .forEach((offer, idx) => { structureOfOffer(offer, idx) });
    } catch (error) {
        console.error('Error loading offers:', error);
    }
}

// load offers when HTML is already loaded
window.addEventListener('DOMContentLoaded', () => {
    loadOffers(12)
        .then(() => {
            // show apply section
            Array.from(applyButtons).forEach((button, idx) => {
                button.addEventListener('click', () => {
                    createdApplySections[idx] ? createdApplySections[idx].style.display = 'flex' : createApplySection(idx);

                    let hideApplySectionButtons = document.getElementsByClassName('exit');
                    hideApplySectionButtons[0].addEventListener('click', () => {
                        hideApplySection(idx);
                    });

                    window.document.addEventListener('keydown', (event) => {
                        if (event.key === 'Escape') {
                            hideApplySection(idx);
                            button.blur();
                        }
                    });
                });
            });
        })
});


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - */
// searching
const searchInputs = document.querySelectorAll('.search-inputs');
const answers = document.querySelectorAll('.answers');
const customLists = document.querySelectorAll('.custom-list');
const selects = document.querySelectorAll('.select');
const findOffersButton = document.querySelector('.search-button');
let searchFilters = [];

// show input options for searching
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

// send data to search offers
loadMoreOffersButton.addEventListener('click', (event) => {
    event.target.style.display = 'none';
    searchFilters = [
        answers[2]?.textContent.trim() || '',
        answers[1]?.textContent.trim() || '',
        answers[0]?.textContent.trim() || '',
    ];

    loadOffers(100, searchFilters[0], searchFilters[1], searchFilters[2]);
    window.scrollTo({ top: 500 });
});

// load more offers
findOffersButton.addEventListener('click', () => {
    searchFilters = [
        answers[2]?.textContent.trim() || '',
        answers[1]?.textContent.trim() || '',
        answers[0]?.textContent.trim() || '',
    ];
    loadOffers(12, searchFilters[0], searchFilters[1], searchFilters[2]);
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// FIXME: create function fetchLanguages, get all HTML elements with content to translate
// function changeLanguage() {
//     const browserDefaultLanguage = navigator.language;
// }