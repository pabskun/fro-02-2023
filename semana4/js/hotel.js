const inputDias = document.getElementById('txt-dias');
const btnCalcular = document.getElementById('btn-calcular');
const pResultado = document.getElementById('p-resultado');

const PRECIODIA = 100;

let calcularPorcDescuento = (dias) => {

    let porcDescuento = 0;

    if ((dias > 5) && (dias < 10)) {
        porcDescuento = 0.1;
    } else if (dias >= 10) {
        porcDescuento = 0.15;
    }

    return porcDescuento;
};

let imprimir = () => {
    let dias = inputDias.value;
    let subtotal = dias * PRECIODIA;
    let porcDescuento = calcularPorcDescuento(dias);
    let descuentoAplicado = subtotal * porcDescuento
    let total = subtotal - descuentoAplicado;

    pResultado.innerText = `El costo de hospedaje es de: ${total}`;

};

btnCalcular.addEventListener('click', imprimir);