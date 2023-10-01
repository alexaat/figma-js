const textFields = document.querySelectorAll('.text-field');

textFields.forEach(textField => {
    textField.addEventListener('click', e => {
        const target = e.currentTarget;
        const lable = target.querySelector('.text-field-lable');
        const input = target.querySelector('.text-field-text-input');
        const buttonContainer = target.querySelector('.text-field-image');
        const button = target.querySelector('.text-field-image img');
    
        textField.style.borderColor = '#008b8b';
    
        lable.style.fontSize = '0.8rem';
        input.style.display = 'block';
        input.focus();
    
        buttonContainer.style.display='flex';

        lable.style.color = '#aaa';
       
    
        button.addEventListener('click', (e)=> {
            input.value=''; 
        });

        input.addEventListener('focusout', (e) => {         
            input.value='';
            lable.style.fontSize = '1.1rem';
            input.style.display = 'none';
            buttonContainer.style.display='none'; 
            textField.style.borderColor = '#222'; 
            lable.style.color = '#222';     
        });
    });



})





