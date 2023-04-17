/*const validatingInput = document.querySelector('#validation-input');

function onInputBlurChange() {
    const inputLength = document.querySelector('[data-length]');
    console.log(validatingInput.value.length);
    console.log(inputLength.dataset);

    if(validatingInput.value.length === +inputLength.dataset.length) {
        validatingInput.classList.remove('invalid');
        validatingInput.classList.add('valid');
    }else if(validatingInput.value.length !==inputLength.dataset.length){
        validatingInput.classList.remove('valid');
        validatingInput.classList.add('invalid');
        
    }
}


validatingInput.addEventListener('blur', onInputBlurChange);*/
const inputEl = document.getElementById('validation-input') 
 
inputEl.addEventListener('blur', onInputElBorderColor)  
 
function onInputElBorderColor() { 
     
    const inputDataLength = document.querySelector('[data-length]'); 
    console.log(inputDataLength.dataset.length);
 
    if (Number(inputDataLength.dataset.length) === inputEl.value.trim().length){ 
        inputEl.classList.add('valid'); 
        inputEl.classList.remove('invalid'); 
    } 
    else { 
        inputEl.classList.add('invalid'); 
        inputEl.classList.remove('valid'); 
    } 
}