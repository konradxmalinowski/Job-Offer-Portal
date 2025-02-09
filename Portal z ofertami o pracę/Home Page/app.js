import createStructureOfApplyDialog from './apply_structure.js';

const dailyOffersWrapper = document.querySelector('.daily-offers-wrapper');

// desktop
dailyOffersWrapper.addEventListener('wheel', (event) => {
  event.preventDefault();

  if (event.deltaY > 0) {
    dailyOffersWrapper.scrollLeft += 100;
  } else {
    dailyOffersWrapper.scrollLeft -= 100;
  }
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// offers
const offersWrapper = document.querySelector('.offers-wrapper');
const loadMoreOffersButton = document.querySelector('.load-more-button');
const applyButtons = document.getElementsByClassName('apply-button-created');
let offersData = [];
let createdApplySections = [];

function createApplySection(idx) {
  const section = document.createElement('section');
  section.className = 'apply-section';
  section.innerHTML = createStructureOfApplyDialog(offersData, idx);

  document.body.appendChild(section);
  createdApplySections[idx] = section;
  document
    .querySelectorAll('body > *:not(.apply-section, script')
    .forEach((el) => {
      el.style.filter = 'blur(7px)';
    });
}

function hideApplySection(idx) {
  if (createdApplySections[idx]) {
    createdApplySections[idx].remove();
  }
  document.querySelectorAll('body > *:not(.apply-section').forEach((el) => {
    el.style.filter = 'none';
  });
}

function createStructureOfOffers(offer, idx) {
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
  name.style.fontWeight = '800';
  name.style.fontSize = '30px';
  name.style.textAlign = 'center';

  const companyNameElem = document.createElement('p');
  companyNameElem.textContent = offer.companyName;
  companyNameElem.style.fontWeight = '600';
  companyNameElem.style.fontSize = '25px';

  const employmentType = document.createElement('p');
  employmentType.textContent = offer.employmentType;
  employmentType.style.color = 'var(--clr-grey2)';

  const placeElem = document.createElement('p');
  placeElem.textContent = offer.place;

  const button = document.createElement('button');
  button.classList.add('apply-button-created');
  button.textContent = 'Apply';

  offerDiv.append(name, companyNameElem, employmentType, placeElem, button);
  offersWrapper.appendChild(offerDiv);
}

function handleClickApplyButon() {
  Array.from(applyButtons).forEach((button, idx) => {
    button.addEventListener('click', () => {
      if (createdApplySections[idx])
        createdApplySections[idx].style.display = 'flex';
      else createApplySection(idx);

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
}

async function loadOffers(max, place = '', companyName = '', jobName = '') {
  offersWrapper.innerHTML = '';
  offersData = [];
  createdApplySections = [];

  if (jobName === 'Stanowisko...') jobName = '';
  if (companyName === 'Firma...') companyName = '';
  if (place === 'Lokalizacja...') place = '';

  try {
    const response = await fetch('./list_of_offers-en.json');
    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }
    const data = await response.json();

    data
      .filter(
        (offer, idx) =>
          idx <= max &&
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
        createStructureOfOffers(offer, idx);
      });
  } catch (error) {
    console.error('Error loading offers:', error);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadOffers(11).then(handleClickApplyButon);
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - */
// searching
const searchInputs = document.querySelectorAll('.search-inputs');
const options = document.querySelectorAll('.options');
const customLists = document.querySelectorAll('.custom-list');
const selects = document.querySelectorAll('.select');
const findOffersButton = document.querySelector('.search-button');
const clearInputsButton = document.querySelector('.clear-button');
let searchFilters = [];

function IsChosen(idx, select) {
  let values = [
    'custom-list1-select',
    'custom-list2-select',
    'custom-list3-select',
  ];
  return select.classList.contains(values[idx]);
}

function clearInputs() {
  options.forEach((option, idx) => {
    if (idx === 0) option.textContent = 'Stanowisko...';
    else if (idx === 1) option.textContent = 'Firma...';
    else if (idx === 2) option.textContent = 'Lokalizacja...';
  });

  loadOffers(11);
}

// show input options for searching
searchInputs.forEach((searchInput, idx) => {
  searchInput.addEventListener('click', () => {
    customLists[idx].style.display =
      customLists[idx].style.display === 'block' ? 'none' : 'block';
  });
});

options.forEach((option, idx) => {
  if (option.textContent != '') {
    return;
  }

  if (idx === 0) option.textContent = 'Stanowisko...';
  else if (idx === 1) option.textContent = 'Firma...';
  else if (idx === 2) option.textContent = 'Lokalizacja...';
});

selects.forEach((select) => {
  select.addEventListener('click', () => {
    if (IsChosen(0, select)) {
      options[0].textContent = select.textContent.trim();
    }
    if (IsChosen(1, select)) {
      options[1].textContent = select.textContent.trim();
    }
    if (IsChosen(2, select)) {
      options[2].textContent = select.textContent.trim();
    }
  });
});

clearInputsButton.onclick = clearInputs;

// send data to search offers
loadMoreOffersButton.addEventListener('click', (event) => {
  event.target.style.display = 'none';
  searchFilters = [
    options[2]?.textContent.trim() || '',
    options[1]?.textContent.trim() || '',
    options[0]?.textContent.trim() || '',
  ];

  loadOffers(100, searchFilters[0], searchFilters[1], searchFilters[2]);
  window.scrollTo({ top: 500 });
});

// load more offers
findOffersButton.addEventListener('click', () => {
  searchFilters = [
    options[2]?.textContent.trim() || '',
    options[1]?.textContent.trim() || '',
    options[0]?.textContent.trim() || '',
  ];
  loadOffers(12, searchFilters[0], searchFilters[1], searchFilters[2]);
});

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// FIXME: create function fetchLanguages, get all HTML elements with content to translate
// function changeLanguage() {
//     const browserDefaultLanguage = navigator.language;
// }
