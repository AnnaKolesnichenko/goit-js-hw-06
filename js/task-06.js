const validatingInput = document.querySelector('#validation-input');

function onInputBlurChange() {
    const inputLength = document.querySelector('[data-length]');
    console.log(validatingInput.value.length);

    if(validatingInput.value.length == inputLength.dataset.length) {
        validatingInput.classList.add('valid');
    }else if(validatingInput.value.length !==inputLength.dataset.length){
        validatingInput.classList.remove('valid');
        validatingInput.classList.add('invalid');
    }
}

validatingInput.addEventListener('blur', onInputBlurChange);