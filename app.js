const dialog = document.querySelector(".dialog"); 
const submitButton = document.querySelector('.button-container');
const dialogTitle = document.querySelector('.dialog-title');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

submitButton.addEventListener('click', e => {
    const name = nameInput.value.trim();   
    if(name != ''){      
        dialogTitle.textContent = `Thanks for signin up, ${name}`;
        dialog.style.display='flex';

        setTimeout(() => {
            dialog.style.display='none';
            nameInput.value = '';
            emailInput.value = '';
        }, 3000);
    }
});