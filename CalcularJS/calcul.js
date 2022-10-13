const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

function btnOnClick() {
    const sumaInputs = innerText = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + sumaInputs;
}

function btnOnClick1() {
    const restaInputs = innerText = parseInt(input1.value) - parseInt(input2.value);
    result.innerText = "Resultado: " + restaInputs;
}

function btnOnClick2() {
    const multiInputs = innerText = parseInt(input1.value) * parseInt(input2.value);
    result.innerText = "Resultado: " + multiInputs;
}

function btnOnClick3() {
    const diviInputs = innerText = parseInt(input1.value) / parseInt(input2.value);
    result.innerText = "Resultado: " + diviInputs;
}



