let counterValue = 0;

const btnMinus = document.querySelector('[data-action="decrement"]');
const btnPlus = document.querySelector('[data-action="increment"]');
const valueNUm = document.querySelector('#value');

function plus() {
    counterValue += 1;
    valueNUm.textContent = counterValue;
    console.log(valueNUm.textContent);
    
}

function minus() {
        counterValue -= 1;
        valueNUm.textContent = counterValue;
        console.log(valueNUm.textContent);
}

btnMinus.addEventListener('click', minus);
btnPlus.addEventListener('click', plus);