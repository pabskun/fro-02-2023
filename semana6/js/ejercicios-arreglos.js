let estudiantes = ["Esteban", "Melania", "Laura", "Alberto", "Bryan"];

for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Nombre: ${estudiantes[i]} ,`);
}

console.log('---- Eliminar un dato del arreglo ----');
estudiantes.splice(3, 1);


console.log('---- Arreglo alrevés ----')
estudiantes.reverse();
console.log(estudiantes);

for (let i = 0; i < estudiantes.length; i++) {
    console.log(`Nombre: ${estudiantes[i]} ,`);
}