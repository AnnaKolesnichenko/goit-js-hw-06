const sizeControlInput = document.querySelector('#font-size-control');
const anyTextSpan = document.querySelector('#text');

//const minFont = sizeControlInput.getAttribute('min');
//const maxFont = sizeControlInput.getAttribute('max');
//const minNum = Number(minFont);
//const maxNum = Number(maxFont);

function onFontSizeChange(event) {   
    anyTextSpan.style.fontSize = `${event.currentTarget.value}px`;

    //const fontSizePx = Math.random() * (maxNum - minNum) + minNum;
    //anyTextSpan.style.fontSize = fontSizePx + 'px';    
}

sizeControlInput.addEventListener('change', onFontSizeChange);

