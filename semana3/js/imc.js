let inputPeso = document.getElementById('input-peso');
let inputEstatura = document.getElementById('input-estatura');
let btnCalcular = document.getElementById('btn-calcular');
let pResultado = document.getElementById('parrafo-resultado');

const calcularImc = () => {
    let peso = Number(inputPeso.value);
    let estatura = Number(inputEstatura.value);

    let imc = peso / Math.pow(estatura, 2);
    return imc;
};


const clasificarImc = (imc) => {
    let clasificacion = '';
    if (imc >= 35) {
        clasificacion = 'Obesidad mórbida';
    } else if (imc >= 30) {
        clasificacion = 'Obesidad';
    } else if (imc >= 25) {
        clasificacion = 'Sobrepeso';
    } else if (imc >= 18.5) {
        clasificacion = 'Normal';
    } else {
        clasificacion = 'Bajo de peso';
    }
    return clasificacion;
};

const obtenerClaseCss = (clasificacion) => {
    let clase = '';
    switch (clasificacion) {
        case 'Obesidad mórbida':
            clase = 'morbida';
            break;
        case 'Obesidad':
            clase = 'obesidad';
            break;
        case 'Sobrepeso':
            clase = 'sobrepeso';
            break;
        case 'Normal':
            clase = 'normal';
            break;
        case 'Bajo de peso':
            clase = 'bajo';
            break;
    }
    return clase;
};

const imprimirImc = () => {
    let imc = calcularImc();
    let clasificacion = clasificarImc(imc);
    let clase = obtenerClaseCss(clasificacion);
    pResultado.innerHTML = `
        <span>El imc es ${imc} y se clasifica como:</span> 
        <span class="${clase}"> ${clasificacion}</span>
    `;
};



btnCalcular.addEventListener('click', imprimirImc);