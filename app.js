const dialog = document.querySelector(".dialog"); 
const submitButton = document.querySelector('.button-container');
const dialogTitle = document.querySelector('.dialog-title');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');


const textFieldName = document.querySelector("#name-text-field");
const textFieldLabelName = document.querySelector("#name-text-field-label");
const textFieldInputName = document.querySelector("#name-text-field-input");
const textFieldButtonContainerName = document.querySelector("#name-text-field-button-container");
const textFieldInputContainerName = document.querySelector("#name-text-field-input-container");
const clearButtonName = document.querySelector("#name-text-field-button-container img");

const textFieldEmail = document.querySelector("#email-text-field");
const textFieldInputEmail= document.querySelector("#email-text-field-input");


submitButton.addEventListener('click', e => {
    const name = textFieldInputName.value.trim();   
    if(name != ''){      
        dialogTitle.textContent = `Thanks for signin up, ${name}`;
        dialog.style.display='flex';

        setTimeout(() => {
            dialog.style.display='none';
            textFieldInputName.value = '';
            textFieldInputEmail.value = '';
            clearFocus(textFieldName);
            clearFocus(textFieldEmail);
        }, 3000);
    }
});

textFieldName.addEventListener('click', e => { 
   
    // textFieldButtonContainerName.style.display = 'flex';
    e.currentTarget.childNodes[3].style.display = 'flex';
    
    //textFieldLabelName.style.height = '1em';
    e.currentTarget.childNodes[1].childNodes[1].style.height = '0.8em';    
    
    //textFieldLabelName.style.fontSize = '1em';
    e.currentTarget.childNodes[1].childNodes[1].style.fontSize = '0.8em';   
   
   // textFieldInputName.style.display = 'block';
    e.currentTarget.childNodes[1].childNodes[3].style.display = 'block';

    e.currentTarget.style.borderColor = 'cyan';

   // textFieldInputName.focus();
   e.currentTarget.childNodes[1].childNodes[3].focus();
});

textFieldEmail.addEventListener('click', e => {     

    // textFieldButtomContainerName.style.display = 'flex';
    e.currentTarget.childNodes[3].style.display = 'flex';
    
    //textFieldLabelName.style.height = '1em';
    e.currentTarget.childNodes[1].childNodes[1].style.height = '0.8em';    
    
    //textFieldLabelName.style.fontSize = '1em';
    e.currentTarget.childNodes[1].childNodes[1].style.fontSize = '0.8em';   
   
   // textFieldInputName.style.display = 'block';
    e.currentTarget.childNodes[1].childNodes[3].style.display = 'block';

    e.currentTarget.style.borderColor = 'cyan';

   // textFieldInputName.focus();
   e.currentTarget.childNodes[1].childNodes[3].focus();
});

document.body.addEventListener('click', e => {
    const id = e.target.id;
    if(id === 'name-text-field-clear-icon'){
        textFieldInputName.value = '';
    }else if (id === 'email-text-field-clear-icon'){
        textFieldInputEmail.value = '';
    }else{   
        if(id!=='name-text-field' && id!=='name-text-field-label' && id!=='name-text-field-input'){
            clearFocus(textFieldName);
        }
        if(id!=='email-text-field' && id!=='email-text-field-label' && id!=='email-text-field-input'){
            clearFocus(textFieldEmail);
        }
    }
});

const clearFocus = (node) => {
    node.style.borderColor = '#222';
        //textFieldInputName.value
    if( node.childNodes[1].childNodes[3].value === ''){
        // textFieldButtomContainerName.style.display
        node.childNodes[3].style.display = 'none';
        //textFieldLabelName.style.height = '100%';
        node.childNodes[1].childNodes[1].style.height = '100%';
        // textFieldLabelName.style.fontSize = '2em';
        node.childNodes[1].childNodes[1].style.fontSize = '1em';
        // textFieldInputName.style.display = 'none';   
        node.childNodes[1].childNodes[3].style.display = 'none';   
    }
}



