let inputPeso = document.getElementById('input-peso');
let inputEstatura = document.getElementById('input-estatura');
let btnCalcular = document.getElementById('btn-calcular');
let pResultado = document.getElementById('parrafo-resultado');

// Definición de la función
function calcularImc() {
    let peso = Number(inputPeso.value);
    let estatura = Number(inputEstatura.value);

    let imc = 0;
    let clasificacionImc = '';

    imc = peso / Math.pow(estatura, 2); //estatura * estatura

    imc = Math.round(imc);

    pResultado.innerText = `El imc es : ${imc}`;
    //pResultado.innerText = 'El imc es :' + imc;

    if (imc >= 30) {
        clasificacionImc = 'Obesidad';
    } else {
        clasificacionImc = 'Normal';
    }

    pResultado.innerText += ` y se clasifica como ${clasificacionImc}`;



};

// Llamado o invocación de la función
btnCalcular.addEventListener('click', calcularImc);