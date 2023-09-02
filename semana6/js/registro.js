const listaInputs = document.querySelectorAll('input[required]');
const btnRegistrar = document.querySelector('#btn-registrar');
const inputNombre = document.querySelector('#fullName');
const inputCorreo = document.querySelector('#email');
const inputNacimiento = document.getElementById('birthDate');
const inputContrasenna = document.getElementById('password');
const inputConfirmacion = document.getElementById('confirmPassword');
let listaPersonas = [];

const validar = () => {

    let error = false;
    listaInputs.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
            input.classList.remove('correcto');
        } else {
            input.classList.remove('error');
            input.classList.add('correcto');
        }
    });

    if (inputContrasenna.value != inputConfirmacion.value) {
        error = true;
        inputContrasenna.classList.add('error');
        inputConfirmacion.classList.add('error');

        inputContrasenna.classList.remove('correcto');
        inputConfirmacion.classList.remove('correcto');
    }

    return error;
};

const registrar = () => {
    let error = validar();
    if (error == true) {
        console.log('Revise los campos en rojo');
    } else {
        //Variable tipo JSON
        let personaNueva = {
            'nombre': inputNombre.value,
            'correo': inputCorreo.value,
            'nacimiento': inputNacimiento.value,
            'contrasenna': inputContrasenna.value
        };

        console.log(`El usuario ${personaNueva.correo} se ha registrado correctamente`);
        console.log(personaNueva);
        //Agregar la variable json de nuevaPersona al arreglo llamado listaPersonas
        listaPersonas.push(personaNueva);
        console.log(listaPersonas);
    }
};
inputNombre.addEventListener('blur', validar);
btnRegistrar.addEventListener('click', registrar);