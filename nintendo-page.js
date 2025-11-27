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
const slides = document.querySelectorAll('.slide-image-container span');
const prevBtn = document.querySelector('.slide-image__prev button');
const nextBtn = document.querySelector('.slide-image__next button');

/* + thumbnail carousel slider */
const slideOptionsWrapper= document.querySelector('.slide-options');
const slideOptionsContainer= document.querySelector('.slide-options__cont');
const slideOptions = document.querySelectorAll('.slide-options__cont div');
const thumbnailPrevBtnContainer = document.querySelector('.slide-options__prev');
const thumbnailNextBtnContainer = document.querySelector('.slide-options__next');
const thumbnailPrevBtn = document.querySelector('.slide-options__prev button');
const thumbnailNextBtn = document.querySelector('.slide-options__next button');


let counter = 0;

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

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    slide.classList.toggle('active', index === counter);
  });

  translateSlideOptions()
};

slideOptions[0].classList.add('active');

/* translateSlideOptions();
 */
slideOptions.forEach((opt , index) => {
  opt.addEventListener('click', () => {
    counter = index;
    carousel();
  })
});

thumbnailPrevBtnContainer.style.display = "none";

thumbnailNextBtn.addEventListener('click', () => {
  const maxTranslateX = slideOptionsContainer.scrollWidth - slideOptionsWrapper.offsetWidth;
  
  slideOptionsContainer.style.transform = `translateX(-${maxTranslateX}px)`;
  thumbnailNextBtnContainer.style.display = "none";
  thumbnailPrevBtnContainer.style.display = "block";
});

thumbnailPrevBtn.addEventListener('click', () => {
  slideOptionsContainer.style.transform = `translateX(0)`;
  thumbnailNextBtnContainer.style.display = "block";
  thumbnailPrevBtnContainer.style.display = "none";
});

function calculateThumbs() {
  const thumbWidth = slideOptions[0].offsetWidth + 25; // 90 + 25
  const visibleThumbsNumber = Math.max(1, Math.floor(slideOptionsWrapper.clientWidth / thumbWidth)); // 5
  const thumbStep = visibleThumbsNumber * thumbWidth;  
  const maxTranslateX = Math.max(0, slideOptionsContainer.scrollWidth - slideOptionsWrapper.clientWidth); 

  return {thumbStep, maxTranslateX, visibleThumbsNumber};
}

function translateSlideOptions() {
  slideOptions.forEach((opt , index) => {
    opt.classList.toggle('active', index === counter);
  });

  const {thumbStep, maxTranslateX, visibleThumbsNumber} = calculateThumbs();
  const page = Math.floor(counter / visibleThumbsNumber);
  const shift = Math.min(page * thumbStep, maxTranslateX);
 
  slideOptionsContainer.style.transform = `translateX(-${shift}px)`;
  thumbnailPrevBtnContainer.style.display = (shift === 0) ? 'none' : 'block';
  thumbnailNextBtnContainer.style.display = (shift >= maxTranslateX) ? 'none' : 'block'; /* *** */
}


/* SLIDE-IN TOP PANEL */

const topPanel = document.querySelector('.slide-in-top-panel-div');

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  console.log(scrollHeight);

  if (scrollHeight > 400) {
  
    topPanel.classList.add("top-slide");
  } else {
    topPanel.classList.remove("top-slide");
  }

});
