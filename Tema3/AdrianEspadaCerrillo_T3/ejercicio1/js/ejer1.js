/* Contexto:
Una empresa de marketing necesita analizar comentarios de usuarios en redes sociales para
detectar palabras clave. El texto debe limpiarse y procesarse antes de su análisis.
*/

function convierteMinuscula(comentario) {

    return comentario.toString().toLowerCase();


}

function quitarCaracter(comentario, caracter) {

    return comentario.toString().replace(caracter, "");

}

function stringToArray(comentario) {

    let arr = [];

    arr = comentario.split(" ");

    return arr;

}

function encontrarPalabra(arr, palabra) {

    let cont = Number(0);

    for(let p of arr) {
        if(p === palabra) {
            cont += cont + Number(1);
        }
    }

    return cont;

}

// Crea una variable llamada comentario

let comentario = 'Excelente servicio! Muy recomendable. excelente atención al cliente.';

console.log(comentario);

// Convierte todo el texto a minúsculas

comentario = convierteMinuscula(comentario);

console.log(comentario);

// Quita puntos y !

comentario = quitarCaracter(comentario, "!");
comentario = quitarCaracter(comentario, ".");

console.log(comentario);

// Divide el text en un array

let arr = stringToArray(comentario);

console.log("Array e palabras del comentario: " + [...arr]);

// Cuenta cuántas veces aparece la palabra excelente en el texto

let numApariciones = encontrarPalabra(arr, "excelente");

console.log(`La palabra excelente aparece ${numApariciones} veces`);