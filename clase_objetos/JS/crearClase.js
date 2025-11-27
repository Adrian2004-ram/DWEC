
// Ejemplo 1

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
};

const persona1  = new Persona("Maria", 28);
console.log(persona1.nombre);

// Ejemplo 2

class Animal {

    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log("Hola, soy un animal y me llamo " + this.nombre);    
    }

}

const perro = new Animal("Luna");
perro.saludar();