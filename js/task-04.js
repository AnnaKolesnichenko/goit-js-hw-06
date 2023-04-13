let counterValue = 0;

const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');
const valueNUm = document.querySelector('#value');

function onAdd() {
    counterValue += 1;
    valueNUm.textContent = counterValue;
    console.log(valueNUm.textContent);
    
}

function onDistract() {
        counterValue -= 1;
        valueNUm.textContent = counterValue;
        console.log(valueNUm.textContent);
}

btnMinus.addEventListener('click', onDistract);
btnPlus.addEventListener('click', onAdd);