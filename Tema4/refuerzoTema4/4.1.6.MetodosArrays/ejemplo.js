
let numeros = [1, 2, 3];

// tamaño array

console.log(numeros.length);  // 3

// saber si es array

console.log(Array.isArray(numeros)); // true

// añadir elementos

numeros.push(4); // añade al final
numeros.unshift(0); // añade al principio

//muestra array

console.log([...numeros]);