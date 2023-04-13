const controlsWindow = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const allBoxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBoxesCreate(amount) {  
  amount = input.value;
  let baseSize = 30;
 
  for(let i = 0; i <= amount; i ++) {
    const div = document.createElement('div');
    const size = baseSize + (i * 10);
    const bG = getRandomHexColor();
    div.style.cssText = `width:${size}px;height:${size}px;background-color:${bG}`;
    allBoxes.append(div);
    console.log(allBoxes);    
  }  
}

function onBoxesDestroy() {
  allBoxes.innerHTML = '';
  //allBoxes.remove();
  input.value = '';
}

btnCreate.addEventListener('click', onBoxesCreate);
btnDestroy.addEventListener('click', onBoxesDestroy);



