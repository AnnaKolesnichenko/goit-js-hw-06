
const widget = document.querySelector('.widget');
const colorTitle = document.querySelector('.color');
const changeClrBtn = document.querySelector('.change-color');
const colorByName = document.body.getAttribute('style');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onColorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTitle.textContent = color;

}
changeClrBtn.addEventListener('click', onColorChange);

/*changeClrBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTitle.textContent = getRandomHexColor();
});*/