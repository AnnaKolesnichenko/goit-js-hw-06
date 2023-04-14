
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


function onInputChange(event) {
    nameOutput.textContent = nameInput.value.trim();

    if(event.target.value === '' || event.target.value.trim() === '') {
        nameOutput.textContent = 'Anonymous';
    }
}

nameInput.addEventListener('input', onInputChange);



