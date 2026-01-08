
// Creamos un objeto producto
let alumno = {
    // Añadimos propiedades
    nombre: 'Adrian',
    curso: "2º DAW",
    notaMedia: 6.5
};

// Añadimos metodo presentarse

alumno.presentarse = function () {
    return `Hola, soy ${alumno.nombre} y estudio ${alumno.curso}.`;
}

console.log(alumno.presentarse());

// Añadimos propiedad

alumno.edad = 21;

console.log(`Mi edad es ${alumno.edad}.`);

// Borramos propiedad

delete alumno.edad;

console.log(`Mi edad es ${alumno.edad}.`);

// Mostrar propiedades del objeto

console.log("PROPIEDADES DE ALUMNO: ");

for (let clave in alumno) {
    if (typeof (alumno[clave]) != "function") {
        console.log(`${clave}: ${alumno[clave]}`);
    }
}
