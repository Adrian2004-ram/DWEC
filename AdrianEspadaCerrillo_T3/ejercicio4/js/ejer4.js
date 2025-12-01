/*
Contexto:
Eres responsable de desarrollar un sistema de registro de calificaciones para un grupo de
alumnos. El sistema debe permitir modificar notas, calcular promedios y mostrar resultados.
*/

function notaMedia(notas) {

    // notas totales
    let notasTotal = Number(0);
    
    // sumamos todas las notas
    for(let n of notas) {
        notasTotal += notasTotal + Number(n);
    }

    // calculo de la media
    let media = notasTotal / notas.size;

    return media;

}



// Crea un mapa (Map) llamado notas con los valores:

let notas = new Map();

notas.set("Ana", 9);
notas.set("Luis", 7);
notas.set("María", 8);
notas.set("Carlos", 6);

console.log([...notas]);

// Agrega un nuevo estudiante Lucía con nota 10 y actualiza la nota de Carlos a 7.

notas.set("Lucía", 10);

console.log([...notas]);

// Actualizo nota lucia

notas.set("Lucía", 7);

console.log([...notas]);

// Calcula la nota media del grupo recorriendo el mapa con un bucle for...of.

let media = notaMedia(notas);

console.log(notaMedia);