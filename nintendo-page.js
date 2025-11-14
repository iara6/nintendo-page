const headerButtons = document.querySelectorAll('.header-buttons button');
const overlay = document.querySelector('.modal-overlay');
const dropContent = document.querySelector('.dropdown-content');
const dropdown = document.querySelector('.explore-dropdown'); 
console.log(dropContent.scrollHeight);


headerButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    dropdown.style.display = "block";
    const fullHeight = dropContent.scrollHeight;
    dropContent.classList.add('open-drop');
    dropContent.style.maxHeight = fullHeight + 'px';


    overlay.classList.add('open-modal');

  })
});

function closeModal() {
 /*  const startHeight = dropContent.scrollHeight;
  dropContent.style.maxHeight = startHeight + 'px'; */

  dropContent.style.maxHeight = '0px';
  dropContent.classList.remove('open-drop');
  overlay.classList.remove('open-modal');

};

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});