const validatingInput = document.querySelector('#validation-input');

function onInputBlurChange() {
    const inputLength = document.querySelector('[data-length]');
    console.log(validatingInput.value.length);
    console.log(inputLength.dataset);

    if(validatingInput.value.length === +inputLength.dataset.length) {
        validatingInput.classList.remove('invalid');
        validatingInput.classList.add('valid');
    }else {
        validatingInput.classList.remove('valid');
        validatingInput.classList.add('invalid');
        
    }
}


validatingInput.addEventListener('blur', onInputBlurChange);