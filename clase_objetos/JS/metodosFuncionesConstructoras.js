

// Ejemplo 1

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log("Hola, soy " + this.nombre);
    }
}

let persona1 = new Persona("Ana", 25);
persona1.saludar();

// Ejemplo 2


