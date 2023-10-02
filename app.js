const dialog = document.querySelector("dialog"); 
const submitButton = document.querySelector('.button-container');
const dialogTitle = document.querySelector('.dialog-title');
const nameInput = document.querySelector('#name');



submitButton.addEventListener('click', e => {
    const name = nameInput.value.trim();
    if(name){
        dialogTitle.textContent = `Thanks for signin up, ${name}`;
        dialog.style.display = 'flex'; 
        
    }
})

// const textFields = document.querySelectorAll('.text-field-input');



// textFields.forEach(textFieldInput => {
//     textFieldInput.addEventListener('click', e => {
//         const target = e.currentTarget;
//         const lable = target.querySelector('.text-field-lable');
//         const input = target.querySelector('.text-field-text-input');

//         const button = target.parentElement.querySelector('.text-field-image');
        
//         button.style.display = 'flex';

//         lable.style.fontSize = '0.8rem';
//         input.style.display = 'block';
//         input.focus();

//         input.addEventListener('change', e=>{
//             lable.textContent = e.target.value;
//         });

//         target.addEventListener('focusout', e=>{
//             lable.style.fontSize = '1.1rem';
//             input.style.display = 'none';
//             // button.style.display='none';
//         });
//     });
// });

// const clearButtons = document.querySelectorAll('.text-field-image-cross');
// clearButtons.forEach(button => {
//     console.log(button)
//     button.addEventListener('click', e => {
//         console.log('clear')
//         const input = e.target.parentElement.parentElement.querySelector('.text-field-text-input');
//         input.value = '';
//         const lable = e.target.parentElement.parentElement.querySelector('.text-field-lable');
//         lable.textContent = 'Display Name';


//     })
// })








