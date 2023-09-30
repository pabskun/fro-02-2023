const listaInputs = document.querySelectorAll('[required]');
const btnRegistrar = document.querySelector('#btn-registrar');
const inputNombre = document.querySelector('#fullName');
const inputCorreo = document.querySelector('#email');
const inputNacimiento = document.getElementById('birthDate');
const inputContrasenna = document.getElementById('password');
const inputConfirmacion = document.getElementById('confirmPassword');
let listaPersonas = getStorageItem('listaPersonas');

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
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo realizar el registro',
            'text': 'Revise los campos en rojo'
        });
    } else {
        //Variable tipo JSON
        let personaNueva = {
            'nombre': inputNombre.value,
            'correo': inputCorreo.value,
            'nacimiento': inputNacimiento.value,
            'contrasenna': inputContrasenna.value
        };
        
        listaPersonas.push(personaNueva);
        setStorageItem('listaPersonas', listaPersonas);

        Swal.fire({
            'icon': 'success',
            'title': 'Usuario registrado correctamente',
            'text': `Se envío un correo de verificación a la dirección ${personaNueva.correo}`
        });

    }
};
//inputNombre.addEventListener('blur', validar);
btnRegistrar.addEventListener('click', registrar);