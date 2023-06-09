const controlsWindow = document.querySelector('#controls');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const allBoxes = document.querySelector('#boxes');

const min = Number(input.getAttribute("min"));
const max = Number(input.getAttribute("max"));
const step = Number(input.getAttribute("step"));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = [];

function onBoxesCreate(amount) {  
  amount = input.value;
  let baseSize = 30;
  if(amount > max || amount < 1) {
    return;
  }
 
  for(let i = min; i <= amount; i += step) {    
    const div = document.createElement('div');
    const overDiv = document.createElement('div');
    const size = baseSize + (i * 10);
    const bG = getRandomHexColor();
    div.style.cssText = `width:${size}px;height:${size}px;background-color:${bG}`;
    //allBoxes.append(div);
    //console.log(allBoxes);   
    boxes.push(div);
  }  
  allBoxes.append(...boxes);
}



function onBoxesDestroy() {
  allBoxes.innerHTML = '';
  //allBoxes.remove();
  input.value = '';
}

btnCreate.addEventListener('click', onBoxesCreate);
btnDestroy.addEventListener('click', onBoxesDestroy);



