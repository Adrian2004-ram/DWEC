
let palabra1 = 'hola';
let palabra2 = 'Hola';

console.log(palabra1 === palabra2); // false, sensibles a mayúsculas
console.log(palabra1.toLowerCase() === palabra2.toLowerCase()); // true