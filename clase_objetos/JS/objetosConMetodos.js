
// Ejemplo 1
const perro = {
    nombre: "Rex",
    ladrar: function() {
        console.log("¡Guau Guau!");
    }
};

perro.ladrar(); 

// Ejemplo 2

const usuario = {
    nombre: "Sara",
    saludar: function() {
        console.log("¡Hola, soy " + this.nombre);
    }
};

usuario.saludar();

// Ejemplo 3

const calculadora = {
    numero: 10
};
calculadora.sumar = function(x) {
    return this.numero + x;
};

console.log(calculadora.sumar(5)); // Muestra: 15

// Ejemplo 4

const robot = {
    encender: function(nombre) {
        console.log("¡Hola, " + nombre + "! Robot encendido.");
    }
};

robot.encender("Juan"); // Muestra: ¡Hola, Juan! Robot encendido.