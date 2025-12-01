/*
Contexto:
Estás desarrollando el módulo de pedidos de una aplicación de comida a domicilio. Debes
gestionar los productos que los usuarios añaden a su carrito y calcular el importe final.
*/

function eliminarDuplicidad(carrito) {

    // Elimina los duplicados utilizando un método apropiado

    let carritoSet = new Set();

    for(let txt of carrito) {
        carritoSet.add(txt);
    }

    // pasamos el set a arr

    carrito = [];

    for(let txt of carritoSet) {
        carrito.push(txt);
    }

    return carrito;

}

function eliminarUltimoElemento(carrito) {

    carrito.reverse().shift();

    carrito.reverse();

    return carrito;

}

function importeTotal(precios) {

    let total = Number(0);
    
    for(let n of precios) {

        total+= Number(n);

    }

    return total;

}

// Crea un array llamado carrito con los valores:
let carrito = ["pizza", "ensalada", "refresco", "pizza", "postre"];

console.log([...carrito]);

// Eliminamos dupliciadad

carrito = eliminarDuplicidad(carrito);

console.log("Eliminamos duplicidades: " + [...carrito]);


// Elimina el último elemento

carrito = eliminarUltimoElemento(carrito);

console.log("Eliminamos ultimo elemento: " + [...carrito]);

// Añade un nuevo producto

carrito.push("hamburguesa");

console.log("Añadimos producto: " + [...carrito]);

// Creo array paralelo

let precios = [12, 8, 3, 12, 5];

// Calculamos importe total

let total = importeTotal(precios);

console.log("Importe total: " + total);

// Método de ordenación para mostrar los productos ordenados alfabéticamente.

carrito.sort();

console.log("Array ordenado alfabeticamente: " + [...carrito]);
