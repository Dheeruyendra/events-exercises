let button1 = document.querySelector('#btn-1');
let button2 = document.querySelector('#btn-2');
let button3 = document.querySelector('#btn-3');

  button1.addEventListener('click', event =>{
      button2.value--;
  });
 
  button3.addEventListener('click', event =>{
    button2.value++;
});