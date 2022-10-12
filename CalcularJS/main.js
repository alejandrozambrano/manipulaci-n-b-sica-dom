const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo-1');
const input2 = document.querySelector('#calculo-2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');


function btnOnClick(){
    const sumaInputs = innerText = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerHTML = "El resultado es: " + sumaInputs;
}