

// Ejemplo 1

const persona = {
    nombre: "Lucas",
    edad: 30,
    ciudad: "Sevilla"
};

for(let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

/*
* Muestra:
* nombre: Lucas
* edad: 30
* ciudad: Sevilla
*/

// Ejemplo 2

let contador = 0;
for (let clave in persona) {
    contador++;
}

console.log("El objeto tiene " + contador + " propiedades.");

// Ejemplo 3

let claves = [];

for (let clave in persona) {
    claves.push(clave);
}

console.log(claves); // ['nombre', 'edad', 'ciudad']

// Ejemplo 4

console.log(Object.keys(persona)); // ['nombre', 'edad', 'ciudad']
console.log(Object.values(persona)); // ['Lucas', 30, 'Sevilla']
console.log(Object.entries(persona)); // [['nombre', 'Lucas'], ['edad', 30], ['ciudad', 'Sevilla']]
