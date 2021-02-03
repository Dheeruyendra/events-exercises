let input = document.querySelector('#hex-input');
let display = document.querySelector('#exercise-5');

input.addEventListener('input', event => {
     display.style.backgroundColor = input.value;
});