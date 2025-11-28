'use strict';

// Parametros canva

let canvas;
let ancho_canvas;
let alto_canvas;
let context;

// Parametros pelota

let x;
let y;
let ancho_pelota;
let alto_pelota;
let inc_pelota;
let incX;
let incY;


// Parametros ejemplo opcional 
let calcula_color = true;
let c1= 0;
let c2 = 255;
let c3 = 0;

// FUNCION PRINCIPAL

function principal() {
    inicializa_parametros();
    bucle();
}

function bucle() {
    dibuja_campo();
    calcula_coordenadas_pelota();
    dibuja_pelota(x, y);
    setTimeout(bucle, 4);
}

// DIBUJO CAMPO

function inicializa_parametros() {
    // Canvas campo
    canvas = document.getElementById("campo");
    ancho_canvas = canvas.width;
    alto_canvas = canvas.height;
    context = canvas.getContext("2d");
    // Parametros pelota
    x = ancho_canvas / 2;
    y = alto_canvas / 2;
    ancho_pelota = 14;
    alto_pelota = 14;
    inc_pelota = 1; // Avance de la pelota en cada iteracion
    incX = inc_pelota;
    incY = inc_pelota;
}

function dibuja_campo() {
    context.fillStyle = "red";
    //context.clearRect(0, 0, ancho_canvas, alto_canvas);
    context.fillRect(ancho_canvas / 2, 0, 2, alto_canvas);
}

// DIBUJO PELOTA

// Calculo de coordenadas y cambio de incrementos
function calcula_coordenadas_pelota() {
    x += incX;
    y += incY;
    if (x + ancho_pelota > ancho_canvas || x < 0) {
        incX = -incX;
        calcula_color = true;
    }
    if (y + alto_pelota > alto_canvas || y < 0) {
        incY = -incY;
        calcula_color = true;
    }
}

// Muestra la pelota en una posicion
function dibuja_pelota(x, y) {
    // context.fillStyle = "blue";
    if (calcula_color) {
        c1 = Math.floor((Math.random() * 255) + 1);
        c2 = Math.floor((Math.random() * 255) + 1);
        c3 = Math.floor((Math.random() * 255) + 1);
        calcula_color = false;
    }
    context.fillStyle = 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')';
    context.fillRect(x, y, ancho_pelota, alto_pelota);
}

principal();