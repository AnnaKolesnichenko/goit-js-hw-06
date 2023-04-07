
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function addInput() {
    nameOutput.textContent = nameInput.value;
}

if(nameInput.value === null) {
    nameOutput.textContent = 'Anonymous';
}

nameInput.addEventListener('input', addInput);



