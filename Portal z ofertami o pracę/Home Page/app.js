// offers
const offersWrapper = document.querySelector('.offers-wrapper');
const loadMoreOffersButton = document.querySelector('.load-more-button');
let offersData = [];
let createdApplySections = [];

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

function showInputOptions() {
  searchInputs.forEach((searchInput, idx) => {
    searchInput.addEventListener('click', () => {
      customLists[idx].style.display =
        customLists[idx].style.display === 'block' ? 'none' : 'block';
    });
  });
}

function fillEmptyInput() {
  options.forEach((option, idx) => {
    if (option.textContent !== '') {
      return;
    }

    if (browserDefaultLanguage.includes('pl')) {
      if (idx === 0) option.textContent = 'Stanowisko...';
      else if (idx === 1) option.textContent = 'Firma...';
      else if (idx === 2) option.textContent = 'Lokalizacja...';
      return;
    }

    if (idx === 0) option.textContent = 'Position...';
    else if (idx === 1) option.textContent = 'Company...';
    else if (idx === 2) option.textContent = 'Localization...';
  });
}

function fillInputIfChosen() {
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
}

function handleLoadMoreOffersClick() {
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
}

function findMatchingOffers() {
  searchFilters = [
    options[2]?.textContent.trim() || '',
    options[1]?.textContent.trim() || '',
    options[0]?.textContent.trim() || '',
  ];

  loadOffers(12, searchFilters[0], searchFilters[1], searchFilters[2]);
}

loadOffers(12).then(handleClickApplyButton);
showInputOptions();
fillEmptyInput();
fillInputIfChosen();
handleLoadMoreOffersClick();
clearInputsButton.onclick = clearInputs;
findOffersButton.onclick = findMatchingOffers;

// go to top button
const goToTopButton = document.querySelector('#go-to-top');

window.addEventListener('scroll', () => {
  goToTopButton.style.display = 'block';
});
