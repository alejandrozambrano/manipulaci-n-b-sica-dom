const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log(h1)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = 'Alejandro <br> Zambrano'; 
h1.innerText = 'Alejandro <br> Zambrano'; 
// console.log(h1.getAttribute('class')); 
// h1.setAttribute('class', 'rojo');


h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

pid.innerHTML = "";

input.value = "Alejandro Zambrano Lasso"

const img = document.createElement('img');
img.setAttribute('src', 'https://media.gettyimages.com/photos/petit-champlain-district-of-old-quebec-city-picture-id998840826?s=612x612');
console.log('img');

pid.appendChild(img);