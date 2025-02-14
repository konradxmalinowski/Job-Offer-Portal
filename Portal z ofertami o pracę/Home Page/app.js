/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// daily offers
const dailyOffersWrapper = document.querySelector('.daily-offers-wrapper');

dailyOffersWrapper.addEventListener('wheel', (event) => {
  event.preventDefault();

  if (event.deltaY > 0) {
    dailyOffersWrapper.scrollLeft += 100;
  } else {
    dailyOffersWrapper.scrollLeft -= 100;
  }
});


// offers
const offersWrapper = document.querySelector('.offers-wrapper');
const loadMoreOffersButton = document.querySelector('.load-more-button');
const applyButtons = document.getElementsByClassName('apply-button-created');
let offersData = [];
let createdApplySections = [];

window.addEventListener('DOMContentLoaded', () => {
  loadOffers(12).then(handleClickApplyButton)
});



// searching
const searchInputs = document.querySelectorAll('.search-inputs');
const options = document.querySelectorAll('.options');
const customLists = document.querySelectorAll('.custom-list');
const selects = document.querySelectorAll('.select');
const findOffersButton = document.querySelector('.search-button');
const clearInputsButton = document.querySelector('.clear-button');
let searchFilters = [];

function isChosen(idx, select) {
  let values = [
    'custom-list1-select',
    'custom-list2-select',
    'custom-list3-select',
  ];
  return select.classList.contains(values[idx]);
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
    if (isChosen(0, select)) {
      options[0].textContent = select.textContent.trim();
    }
    if (isChosen(1, select)) {
      options[1].textContent = select.textContent.trim();
    }
    if (isChosen(2, select)) {
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




// FIXME: create function fetchLanguages, get all HTML elements with content to translate
// function changeLanguage() {
//     const browserDefaultLanguage = navigator.language;
// }