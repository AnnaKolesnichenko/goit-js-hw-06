
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function addInput(event) {
    nameOutput.textContent = event.currentTarget.value;
}

if(nameInput.value === 0) {
    nameOutput.textContent = 'Anonymous';
}

nameInput.addEventListener('input', addInput);



