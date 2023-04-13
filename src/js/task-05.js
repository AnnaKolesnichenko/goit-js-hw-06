
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


function onInputChange(event) {
    nameOutput.textContent = event.currentTarget.value;
}

if(!nameInput.value) {
    nameOutput.textContent = 'Anonymous';
}

nameInput.addEventListener('input', onInputChange);



