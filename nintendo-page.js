/* HEADER DROPDOWN MENU */
const headerButtons = document.querySelectorAll('.header-buttons button');
const overlay = document.querySelector('.modal-overlay');
const dropContentContainer = document.querySelector('.dropdown-content');
const dropdownContents = document.querySelectorAll('.dropdown'); 


headerButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const menuOption = btn.dataset.option;
    const dropdownContent = document.getElementById(menuOption);

    dropdownContents.forEach(content => content.style.display = "none");
    
    dropdownContent.style.display = "block";
    dropContentContainer.classList.remove('open-drop');
  /*   dropContentContainer.style.maxHeight = '0px'; */

    /* const fullHeight = dropContentContainer.scrollHeight; */
    
    dropContentContainer.classList.add('open-drop');
    dropContentContainer.style.maxHeight = dropContentContainer.scrollHeight + 'px';
  /*   dropContentContainer.style.maxHeight = fullHeight + 'px'; */

    overlay.classList.add('open-modal');
  })
});

function closeModal() {
  dropContentContainer.classList.remove('open-drop');
  dropContentContainer.style.maxHeight = '0px';
  dropdownContents.forEach(content => content.style.display = "none");

  overlay.classList.remove('open-modal');
};

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});