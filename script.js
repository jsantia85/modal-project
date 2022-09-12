'use strict';

// elements
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

// functions
const addHidden = function() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

const removeHidden = function() {
  modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// loop for modals
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', removeHidden)
}

// event listener
btnCloseModal.addEventListener('click', addHidden)
overlay.addEventListener('click', addHidden)

// global event
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) { 
    addHidden() 
  }
})