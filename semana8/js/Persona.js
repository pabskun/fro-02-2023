//Método constructor del protitpo de Persona
function Persona(cedula, nombre, edad) {
    this._cedula = cedula;
    this._nombre = nombre;
    this._edad = edad;
};

Persona.prototype.saludar = function() {
    console.log(`Saludos me llamo ${this._nombre}`);
};

Persona.prototype.getCedula = function() {
    return this._cedula;
}
Persona.prototype.setCedula = function(nuevaCedula) {
    if (typeof nuevaCedula == 'string') {
        this._cedula = nuevaCedula;
    } else {
        console.error('La cédula debe ser un valor de texto.');
    }
}

Persona.prototype.getNombre = function() {
    return this._nombre;
};
Persona.prototype.setNombre = function(nuevoNombre) {
    if (typeof nuevoNombre == 'string') {
        this._nombre = nuevoNombre;
    } else {
        console.error('El nombre debe ser un valor de texto.');
    }
}

Persona.prototype.getEdad = function() {
    return this._edad;
}

Persona.prototype.setEdad = function(nuevaEdad) {
    if (typeof nuevoNombre == 'number') {
        this._edad = nuevaEdad
    } else {
        console.error('La edad debe ser un valor numérico.');
    }
}