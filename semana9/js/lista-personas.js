const tblPersonas = document.querySelector('#tbl-personas tbody');

const imprimirTabla = async () =>{
    let listaPersonas = await obtenerPersonas();
    listaPersonas.forEach(persona =>{
        tblPersonas.innerHTML += `
            <tr>
                <td>${persona.nombre} </td>
                <td>${persona.apellido} </td>
                <td>${persona.edad} </td>
            </tr>
        `;
    });
};

imprimirTabla();