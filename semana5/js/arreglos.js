let estudiantes = ["Esteban", "Melania", "Laura", "Alberto", "Bryan"];

//Obtener el tamaño del arreglo
let tamanno = estudiantes.length;
console.log(`El tamaño del arreglo es ${tamanno}`);

//Obtener el último índice del arreglo
let ultimoIndice = tamanno - 1;
console.log(`El último índice del arreglo es : ${ultimoIndice}`);

//Acceder o imprimir la información de una posición del arreglo
console.log(estudiantes[0]);
console.log(estudiantes[1]);
console.log(estudiantes[2]);
console.log(estudiantes[3]);
console.log(estudiantes[4]);

//Modificar el valor de una posición del arreglo
estudiantes[0] = "Fabricio";

//Imprimir toda la información de un arreglo
console.log('Impresión del arreglo usando un ciclo for');
for (let i = 0; i < tamanno; i++) {
    console.log(estudiantes[i]);
}

//Imprimir con ciclo foreach
console.log('Impresión del arreglo usando un ciclo foreach');
estudiantes.forEach(estudianteTemp => {
    console.log(estudianteTemp);
});