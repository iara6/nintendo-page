/* HEADER DROPDOWN MENU */
const headerButtons = document.querySelectorAll('.header-buttons button');
const overlay = document.querySelector('.modal-overlay');
const dropContentContainer = document.querySelector('.dropdown-content');
const dropdownContents = document.querySelectorAll('.dropdown'); 
const dropdownCloseBtns = document.querySelectorAll('.close-dropdown-button');
const headerDiv = document.querySelector('.header-div');

headerButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (dropContentContainer.classList.contains('open-drop')) {
      closeDropdown();
      return;
    }
   /*  if (btn.classList.contains('selected')) {
      closeDropdown();
      return; 
    } */

    headerButtons.forEach(btn => btn.classList.remove('selected'));
    btn.classList.add('selected');

    const menuOption = btn.dataset.option;
    const dropdownContent = document.getElementById(menuOption);

    dropdownContents.forEach(content => content.style.display = "none");
    
    dropdownContent.style.display = "block";
    /* dropContentContainer.classList.remove('open-drop'); */
  /*   dropContentContainer.style.maxHeight = '0px'; */

    /* const fullHeight = dropContentContainer.scrollHeight; */
    
    dropContentContainer.classList.add('open-drop');
    dropContentContainer.style.maxHeight = dropContentContainer.scrollHeight + 'px';
  /*   dropContentContainer.style.maxHeight = fullHeight + 'px'; */

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
/* headerDiv.addEventListener('click', (e) => {
  if (e.target === headerDiv) closeDropdown();
}) */
dropdownCloseBtns.forEach(btn => {
  btn.addEventListener('click', closeDropdown);
})

headerDiv.addEventListener('click', (e) => {
  // If click came from a header button (or inside it) -> do nothing
  if (e.target.closest('.header-buttons button')) return;

  // If click came from inside the dropdown content -> do nothing
  if (e.target.closest('.dropdown-content')) return;

  // If click came from a dedicated close button inside the header -> let its handler run
  if (e.target.closest('.close-dropdown-button')) return;

  // Otherwise (logo, other links, empty space, etc.) -> close dropdown
  closeDropdown();
});