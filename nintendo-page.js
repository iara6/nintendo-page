/* HEADER DROPDOWN MENU */
const headerButtons = document.querySelectorAll('.header-buttons button');
const overlay = document.querySelector('.modal-overlay');
const dropContentContainer = document.querySelector('.dropdown-content');
const dropdownContents = document.querySelectorAll('.dropdown'); 
const dropdownCloseBtns = document.querySelectorAll('.close-dropdown-button');
const headerDiv = document.querySelector('.header-div');

const searchBtn = document.querySelector('.search button');
const dropContentSearchContainer = document.querySelector('.dropdown-content-search');
const dropdownSearchContent = document.querySelector('.dropdown-content-search-div'); 
const overlaySearch = document.querySelector('.modal-overlay-search');
const dropdownSearchCloseBtn = document.querySelector('.close-search-dropdown-button');

headerButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (dropContentContainer.classList.contains('open-drop')) {
      closeDropdown();
      return;
    }

    headerButtons.forEach(btn => btn.classList.remove('selected'));
    btn.classList.add('selected');

    const menuOption = btn.dataset.option;
    const dropdownContent = document.getElementById(menuOption);

    dropdownContents.forEach(content => content.style.display = "none");
    
    dropdownContent.style.display = "block";
    
    dropContentContainer.classList.add('open-drop');
    dropContentContainer.style.maxHeight = dropContentContainer.scrollHeight + 'px';

    overlay.classList.add('open-modal');
  })
});

function closeDropdown() {
  headerButtons.forEach(btn => btn.classList.remove('selected'));
  dropContentContainer.style.maxHeight = '0px';
  dropContentContainer.classList.remove('open-drop');
  dropdownContents.forEach(content => content.style.display = "none");

  overlay.classList.remove('open-modal');
};

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeDropdown();
});

dropdownCloseBtns.forEach(btn => {
  btn.addEventListener('click', closeDropdown);
})

headerDiv.addEventListener('click', (e) => {
  if (e.target.closest('.header-buttons button')) return;
  if (e.target.closest('.dropdown-content')) return;
  if (e.target.closest('.close-dropdown-button')) return;
  closeDropdown();
});

/* HEADER SEARCH DROPDOWN MENU */

searchBtn.addEventListener('click', () => {
  if (dropContentSearchContainer.classList.contains('open-drop')) {
    closeSearchDropdown();
    return;
  }
 
  dropdownSearchContent.style.display = "block";
  dropContentSearchContainer.classList.add('open-drop');
  dropContentSearchContainer.style.maxHeight = dropContentSearchContainer.scrollHeight + 'px';
  overlaySearch.classList.add('open-modal');
});

function closeSearchDropdown() {
  dropContentSearchContainer.style.maxHeight = '0px';
  dropContentSearchContainer.classList.remove('open-drop');
  dropdownSearchContent.style.display = "none";

  overlaySearch.classList.remove('open-modal');
};

dropdownSearchCloseBtn.addEventListener('click', closeSearchDropdown);

overlaySearch.addEventListener('click', (e) => {
  if (e.target === overlaySearch) closeSearchDropdown();
});

/* LOG-IN SIDE PANEL */

const sidePanel = document.querySelector('.log-in-side-content-div');
const logInBtn = document.querySelector('.log-in-button');
const sidePanelCloseBtn = document.querySelector('.close-side-panel-button');
const overlaySidePanel = document.querySelector('.modal-overlay-side-panel');

logInBtn.addEventListener('click', () => {
  sidePanel.classList.add('slide-in');
  overlaySidePanel.classList.add('open-modal');
});

function closeSidePanel() {
  sidePanel.classList.remove('slide-in');
  overlaySidePanel.classList.remove('open-modal');
};

sidePanelCloseBtn.addEventListener('click', closeSidePanel);

overlaySidePanel.addEventListener('click', (e) => {
  if (e.target === overlaySidePanel) closeSidePanel();
});

/* IMAGE GALLERY SLIDER */

const slidesContainer = document.querySelector('.slide-image-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slide-image__prev button');
const nextBtn = document.querySelector('.slide-image__next button');

let counter = 0;

/* nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % slides.length;
  carousel();
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + slides.length) % slides.length;
  carousel();
});

function carousel() {
  slidesContainer.style.transform = `translateX(-${counter * 100}%)`;
} */

nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};