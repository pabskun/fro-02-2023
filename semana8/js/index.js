const objPersona1 = new Persona('123', 'Pablo', 35);
console.log(objPersona1);
objPersona1.setNombre('Pablo Monestel');
objPersona1.setEdad('Hola');
objPersona1.saludar();
console.log(objPersona1.getNombre());

const objPersona2 = new Persona('234', 'Laura', 25);
console.log(objPersona2);
console.log(objPersona2.saludar());