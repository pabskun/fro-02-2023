let suma = 0;
for (let contador = 0; contador <= 30; contador++) {

    //document.write(`Suma = ${suma} , Contador = ${contador} `);
    suma = suma + contador;
    // document.write('Valor de parcial de la sumatoria: ', suma, `(suma + contador) `,
    //     '<br>')
}

document.write('Valor final de la sumatoria: ', suma);

// Imprimir la tabla del número 7  hasta el 7 x 10

document.write('<br>', 'Tabla de multiplicar del 7 ', '<br>');

let resultado = 0;
for (let i = 0; i <= 10; i++) {
    resultado = 7 * i;
    document.write(` 7 x ${i} = ${resultado}`, '<br>');
}