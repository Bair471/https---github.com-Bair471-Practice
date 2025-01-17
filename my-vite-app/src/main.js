import './style.css'
import { setupCounter } from './counter.js'


const itemList = document.getElementById('item-list');
const deleteButtons = document.getElementById('delete-btn');
const confirmBtn = document.getElementById('confirm-btn');
const openModalClass = 'modal_is-opened';
const modal = document.getElementById('modal');


let result = null; 

deleteButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const deleteItem = event.target.closest('li');
      if (deleteItem) {
        result = deleteItem;  
        openModal(modal);  
      }
    });
  });

confirmBtn.addEventListener('click', () => { 
    if (result !== null ) {
        result.remove();
    }
    else{
        closeModal(modal);
    }
});


function openModal(modal) {
    modal.classList.add(openModalClass);
    document.addEventListener('keydown', closeActiveModal);
}

function closeActiveModal(evt) {
    if (evt.key === 'Escape') {
      closeActiveModal();
    }
}

function closeModal(modal) {
    modal.classList.remove(openModalClass);
    document.removeEventListener('keydown', closeActiveModal);
}


setupCounter(document.querySelector('#counter'))
