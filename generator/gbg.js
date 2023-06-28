const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.querySelector('body');
const generateButton = document.getElementById('generate');

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

generateButton.addEventListener('click', setGradient);