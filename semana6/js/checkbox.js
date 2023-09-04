let btnObtener = document.getElementById('btn-obtener');
let checkboxes = document.querySelectorAll('input[name=interests]');

let obtenerValores = () => {
    checkboxes.forEach(input => {
        if (input.checked == true) {
            console.log(input.value)
        }
    });
};


btnObtener.addEventListener('click', obtenerValores);