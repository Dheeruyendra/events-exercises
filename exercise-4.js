let button = document.querySelector('#text1');
let len = document.querySelector('#sp');
  button.addEventListener('input', event => {
  len.innerText = button.value.length;
 
});


