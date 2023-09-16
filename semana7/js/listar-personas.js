const cuerpoTabla = document.querySelector('#tbl-personas tbody');
let listaPersonas = getStorageItem('listaPersonas');

listaPersonas.forEach(persona => {
    cuerpoTabla.innerHTML += `
        <td>${persona.nombre}</td>
        <td>${persona.correo}</td>
        <td>${persona.nacimiento}</td>
    `;
});