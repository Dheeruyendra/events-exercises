let url = document.querySelector('#en-de');

let btn1 = document.querySelector('#btn1');

let btn2 = document.querySelector('#btn2');

let ans = document.querySelector('#result');

btn1.addEventListener('click', event =>{
  ans.value  =  encodeURIComponent(url.value);
});


btn2.addEventListener('click', event =>{
   ans.value = decodeURIComponent(url.value);
});