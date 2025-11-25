'use strict';  // es una directiva de JS que activa el modo estricto.

function sum(a, b) {
    return a + b;
}

let resultado = sum(5, 3);

alert(`El resultado es ${resultado}`);

/* ---------- */

let age = prompt('¿Que edad tienes?', 18); // 18 es el valor por defecto si no pones nada

if (checkAge(age)) {
    alert(`Eres mayor de edad.`);
}else {
    alert(`Eres menor de edad.`);
}

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}