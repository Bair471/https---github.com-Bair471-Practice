const modal = document.getElementById('modal');
const itemList = document.getElementById('item-list');
const deleteButtons = document.querySelectorAll('.delete-btn');
const confirmBtn = document.getElementById('confirm-btn');
const openModalClass = 'modal_is-opened';
const cancelBtn = document.getElementById('cancel-btn');

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
      closeActiveModal(modal);
    }
}

function closeModal(modal) {
    modal.classList.remove(openModalClass);
    document.removeEventListener('keydown', closeActiveModal);
}

confirmBtn.addEventListener('click', () => { 
    if (result !== null) {
        result.remove();
        closeModal(modal);
    }
});

cancelBtn.addEventListener('click', () => {
    closeModal(modal);
});
