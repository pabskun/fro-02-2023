const listaInputs = document.querySelectorAll('input[required]');
const btnRegistrar = document.querySelector('#btn-registrar');
const inputNombre = document.querySelector('#fullName');



const validar = (event) => {
    event.preventDefault();
    listaInputs.forEach(input => {
        if (input.value == '') {
            input.classList.add('error');
            input.classList.remove('correcto');
        } else {
            input.classList.remove('error');
            input.classList.add('correcto');
        }
    });
};
inputNombre.addEventListener('blur', validar);
btnRegistrar.addEventListener('click', validar);