'use strict';

// funcion global

function sayHi() {
    console.log("Soy la funcion sayhi global");
}

// expresion de funcion

let sayHiExpresion = function() {console.log("Soy la funcion sayhi global")}


// expresion de funcion (uso la variable como si fuera nombebre de funcion)


let sayHiExpresion2 = function(nombre, msg = "hello World!") {
    console.log(`${nombre} ${msg}`);
}

sayHiExpresion(); // Soy la funcion sayhi global

sayHiExpresion2("Adrian", "Hola Mundo!"); // Adrian Hola Mundo!

sayHiExpresion2(); // undefined hello World!

/* ----------------------- */

let fn3 = (numero, msg = "hello World!") => {
    console.log(`${numero} ${msg}`);
}

fn3("20", "Hola Mundo!");

/* ----------------------- */

/*

funRan();// da error porque la variable no esta definida aun

let funRan = function(nombre = "Adrian", msg = "hello!") {
    console.log(`${nombre} ${msg}`);
}

*/