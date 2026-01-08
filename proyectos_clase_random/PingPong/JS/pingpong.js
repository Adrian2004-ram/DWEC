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

// Parametros paletas

let separacion;
let alto_pala;
let ancho_pala;
let inc_pala;
let jiX;
let jiY;
let jdX;
let jdY;

// Parametros movimiento paleta

let keys;

let CAR_I_ARRIBA_U;
let CAR_I_ARRIBA_L;
let CAR_I_ABAJO_U;
let CAR_I_ABAJO_L;
let CAR_D_ARRIBA_U;
let CAR_D_ARRIBA_L;
let CAR_D_ABAJO_U;
let CAR_D_ABAJO_L;

let KEY_I_ARRIBA_U;
let KEY_I_ARRIBA_L;
let KEY_I_ABAJO_U;
let KEY_I_ABAJO_L;
let KEY_D_ARRIBA_U;
let KEY_D_ARRIBA_L;
let KEY_D_ABAJO_U;
let KEY_D_ABAJO_L;

let PI_ARRIBA;
let PI_ABAJO;
let PD_ARRIBA;
let PD_ABAJO;

// Parametros de mostrar puntuacion

let puntosI;
let puntosD;
let inicioY;
let valorX;
let valorY;

// Parametros incluir sonido

let beep;
let punto;
let hay_sonido;

// Parametros aumentar velocidad

let hay_inc_vel;

// Parametros pause/start juego

let PAUSA;
let JUGAR;
let txt;

let CAR_PAUSA_U;
let CAR_PAUSA_L;
let CAR_JUGAR_U;
let CAR_JUGAR_L;

let KEY_PAUSA_U;
let KEY_PAUSA_L;
let KEY_JUGAR_U;
let KEY_JUGAR_L;

// Params desactivas sonido

let CAR_HAY_SONIDO_U;
let CAR_HAY_SONIDO_L;

let KEY_HAY_SONIDO_U;
let KEY_HAY_SONIDO_L;

// FUNCION PRINCIPAL

function principal() {
    inicializa_parametros();
    keys = new KeyListener();
    JUGAR = true;
    bucle();
}

function bucle() {
    dibuja_campo();
    if (JUGAR) {
        calcula_coordenadas_pelota();
        dibuja_pelota(x, y);
    }
    controlar_pulsacion();
    dibuja_jugadorI(jiX, jiY);
    dibuja_jugadorD(jdX, jdY);
    dibuja_puntuacion();
    setTimeout(bucle, 4);
}

// DIBUJO CAMPO

function inicializa_parametros() {
    // Sonidos
    beep = new Audio("beep.wav");
    punto = new Audio("punto.wav");
    hay_sonido = true;
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
    // Parametros Palas
    separacion = 12; // Separacion desde el extremo del campo
    alto_pala = alto_canvas / 5;
    ancho_pala = 10;
    inc_pala = 4; // Posiciones que avanza cuando se mueve
    // Posiciones de las paletas de jugadores (i)zq y (d)er.
    jiX = separacion;
    jiY = alto_canvas / 2 - alto_pala / 2;
    jdX = ancho_canvas - separacion - ancho_pala;
    jdY = jiY;

    hay_inc_vel = false; // true para aumentar velocidad en cada rebote

    // Caracteres que representan movimientos y controles
    CAR_I_ARRIBA_U = "A"; // Mover paleta izquierda arriba mayusculas
    CAR_I_ARRIBA_L = CAR_I_ARRIBA_U.toLowerCase(); // PI arriba minusculas
    CAR_I_ABAJO_U = "Z"; // Mover paleta izquierda abajo mayusculas
    CAR_I_ABAJO_L = CAR_I_ABAJO_U.toLowerCase(); // PI abajo minusculas
    CAR_D_ARRIBA_U = "K"; // Mover paleta derecha arriba mayusculas
    CAR_D_ARRIBA_L = CAR_D_ARRIBA_U.toLowerCase(); // PD arriba minusculas
    CAR_D_ABAJO_U = "M"; // Mover paleta derecha abajo mayusculas
    CAR_D_ABAJO_L = CAR_D_ABAJO_U.toLowerCase(); // PD abajo minusculas

    CAR_PAUSA_U = "P"; // Caracter para pausa en mayusculas
    CAR_PAUSA_L = CAR_PAUSA_U.toLowerCase(); // Caracter para pausa en minusculas
    CAR_JUGAR_U = "S"; // Arrancar juego en mayusculas
    CAR_JUGAR_L = CAR_JUGAR_U.toLowerCase(); // Arrancar juego en minusculas

    CAR_HAY_SONIDO_U = "O"; // Caracter para poner/quitar sonido en mayusculas
    CAR_HAY_SONIDO_L = CAR_HAY_SONIDO_U.toLowerCase(); // Poner/quitar sonido en minusculas

    // KeyCode (Movimiento paletas)
    KEY_I_ARRIBA_U = CAR_I_ARRIBA_U.charCodeAt(0); // mayusculas
    KEY_I_ARRIBA_L = CAR_I_ARRIBA_L.charCodeAt(0); // minusculas
    KEY_I_ABAJO_U = CAR_I_ABAJO_U.charCodeAt(0); // Mayusculas
    KEY_I_ABAJO_L = CAR_I_ABAJO_L.charCodeAt(0); // minusculas
    KEY_D_ARRIBA_U = CAR_D_ARRIBA_U.charCodeAt(0); // Mayusculas
    KEY_D_ARRIBA_L = CAR_D_ARRIBA_L.charCodeAt(0); // Minusculas
    KEY_D_ABAJO_U = CAR_D_ABAJO_U.charCodeAt(0); // Mayusculas
    KEY_D_ABAJO_L = CAR_D_ABAJO_L.charCodeAt(0); // Minusculas

    KEY_PAUSA_U = CAR_PAUSA_U.charCodeAt(0); // Mayusculas
    KEY_PAUSA_L = CAR_PAUSA_L.charCodeAt(0); // Minusculas
    KEY_JUGAR_U = CAR_JUGAR_U.charCodeAt(0); // Mayusculas
    KEY_JUGAR_L = CAR_JUGAR_L.charCodeAt(0); // Minusculas

    KEY_HAY_SONIDO_U = CAR_HAY_SONIDO_U.charCodeAt(0); // Mayusculas
    KEY_HAY_SONIDO_L = CAR_HAY_SONIDO_L.charCodeAt(0); // Minusculas

    // Inicializacion deteccion de pulsaciones para KeyCode
    PI_ARRIBA = false;
    PI_ABAJO = false;
    PD_ARRIBA = false;
    PD_ABAJO = false;

    PAUSA = false;

    inicio_partida();
}

function dibuja_campo() {
    context.fillStyle = "red";
    context.clearRect(0, 0, ancho_canvas, alto_canvas);
    context.fillRect(ancho_canvas / 2, 0, 2, alto_canvas);
}

// DIBUJO PELOTA

// Calculo de coordenadas y cambio de incrementos
function calcula_coordenadas_pelota() {

    x += incX;
    y += incY;

    // Comprobacion de la pelota respecto de la pala izquierda
    if (y >= jiY && y <= jiY + alto_pala - 1) {

        if (x <= jiX + ancho_pala) {
            incX = -incX; // Cambio de direccion horizontal
            if (hay_inc_vel && Math.abs(incX) < 3) {
                if (incX < 1) {
                    incX -= 1
                } else {
                    incX += 1
                };
                if (incY < 1) {
                    incY -= 1
                } else {
                    incY += 1
                };
            }
            x = jiX + ancho_pala;
            if (hay_sonido) beep.play();
        }

    } else {

        // Si ha rebasado la posicion de la pala es un punto para el
        // jugador contrario.
        if (x < jiX - separacion) {
            inicio_punto();
            puntosD += 1;
            if (hay_sonido) punto.play();
        }

    }
    // Comprobacion de la pelota respecto de la pala derecha
    if (y >= jdY && y <= jdY + alto_pala - 1) {

        if (x + ancho_pelota >= jdX) {
            incX = -incX; // Cambio de direccion horizontal
            if (hay_inc_vel && Math.abs(incX) < 3) {
                if (incX < 1) {
                    incX -= 1
                } else {
                    incX += 1
                };
                if (incY < 1) {
                    incY -= 1
                } else {
                    incY += 1
                };
            }
            x = jdX - ancho_pelota;
            if (hay_sonido) punto.play();
        }

    } else {
        // Si ha rebasado la posicion de la pala es un punto para el
        // jugador contrario.
        if (x + ancho_pelota > jdX + separacion) {
            inicio_punto();
            puntosI += 1;
            if (hay_sonido) beep.play();
        }
    }

    // Si la pelota rebota en la parte superior o inferior de la pantalla
    // cambia de direccion vertical.
    if (y + alto_pelota > alto_canvas || y < 0) {
        incY = -incY;
    }  
}

// Muestra la pelota en una posicion
function dibuja_pelota(x, y) {
    context.fillStyle = "blue";
    context.fillRect(x, y, ancho_pelota, alto_pelota);
}

// DIBUJO PALETA

// Muestra pala del jugador izquierdo
function dibuja_jugadorI(jiX, jiY) {
    context.fillStyle = "white";
    context.fillRect(jiX, jiY, ancho_pala, alto_pala);
}
// Muestra pala del jugador derecho
function dibuja_jugadorD(jdX, jdY) {
    context.fillStyle = "white";
    context.fillRect(jdX, jdY, ancho_pala, alto_pala);
}

// MOVIMIENTO DE LAS PALETAS

// KEY LISTENER
function KeyListener() {
    this.pressedKeys = [];
    this.keydown = function (e) {
        this.pressedKeys[e.keyCode] = true;
    };
    this.keyup = function (e) {
        this.pressedKeys[e.keyCode] = false;
    };
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
}

KeyListener.prototype.isPressed = function (key) {
    return this.pressedKeys[key] ? true : false;
};



function controlar_pulsacion() {

    if (keys.isPressed(KEY_I_ABAJO_U || KEY_I_ABAJO_L)) {
        // Abajo Izq
        PI_ABAJO = true;
    } else if (keys.isPressed(KEY_I_ARRIBA_U || KEY_I_ARRIBA_L)) { 
        // Arriba Izq
        PI_ARRIBA = true;
    }

    if (keys.isPressed(KEY_D_ABAJO_U || KEY_D_ABAJO_L)) { 
        // Abajo Der
        PD_ABAJO = true;
    } else if (keys.isPressed(KEY_D_ARRIBA_U || KEY_D_ARRIBA_L)) { 
        // Arriba Der
        PD_ARRIBA = true;
    }
    calcula_coordenadas_pala();

    if (keys.isPressed(KEY_PAUSA_U) || keys.isPressed(KEY_PAUSA_L)) {
        PAUSA = true;
        keys.pressedKeys[KEY_PAUSA_U] = false;
        keys.pressedKeys[KEY_PAUSA_L] = false;
    }

    if (keys.isPressed(KEY_JUGAR_U) || keys.isPressed(KEY_JUGAR_L)) {
        JUGAR = true;
        keys.pressedKeys[KEY_JUGAR_U] = false;
        keys.pressedKeys[KEY_JUGAR_L] = false;
    }

    if (keys.isPressed(KEY_HAY_SONIDO_U) || keys.isPressed(KEY_HAY_SONIDO_L)) {
        hay_sonido = !hay_sonido;
        console.log("hay_sonido " + hay_sonido);
        keys.pressedKeys[KEY_HAY_SONIDO_U] = false;
        keys.pressedKeys[KEY_HAY_SONIDO_L] = false;
    }
    
    if (PAUSA) {
        PAUSA = false;
        if (confirm("Seguir?") == true) {
            txt = "Si";
        } else {
            txt = "No";
            JUGAR = false;
            inicializa_parametros();
        }
    }

}

function calcula_coordenadas_pala() {

    if (PI_ARRIBA == true) {
        jiY -= inc_pala;
        if (jiY < 0) jiY = 1;
        PI_ARRIBA = false;
    }

    if (PI_ABAJO == true) {
        jiY += inc_pala;
        if (jiY + alto_pala > alto_canvas) jiY = alto_canvas - alto_pala;
        PI_ABAJO = false;
    }

    if (PD_ARRIBA == true) {
        jdY -= inc_pala;
        if (jdY < 0) jdY = 1;
        PD_ARRIBA = false;
    }

    if (PD_ABAJO == true) {
        jdY += inc_pala;
        if (jdY + alto_pala > alto_canvas) jdY = alto_canvas - alto_pala;
        PD_ABAJO = false;
    }
}

// REBOTE DE LA PELOTA CON LAS PALAS

// Inicializa valores para el inicio de un punto
function inicio_punto() {

    inicioY = Math.floor((Math.random() * alto_canvas / 2) + 1);
    x = ancho_canvas / 2; // Iniciamos desde el centro del campo
    y = inicioY; // La posicion vertical de la pelota es aleatoria
    
    // La direccion de la pelota en es aleatoria
    valorX = Math.floor((Math.random() * 100) + 1);
    if (valorX < 50) {
        incX = inc_pelota;
    } else {
        incX = -inc_pelota;
    }

    valorY = Math.floor((Math.random() * 100) + 1);
    if (valorY < 50) {
        incY = inc_pelota;
    } else {
        incY = -inc_pelota;
    }

    // Posiciones de las paletas de jugadores (i)zq y (d)er.
    jiX = separacion;
    jiY = alto_canvas / 2 - alto_pala / 2;
    jdX = ancho_canvas - separacion - ancho_pala;
    jdY = jiY;
}

// MOSTRAR MARCADOR

// Inicializa valores para el inicio de una partida
function inicio_partida() {
    puntosI = 0;
    puntosD = 0;
    inicio_punto();
}

// Muestra puntuacion cada vez que se produce un cambio
function dibuja_puntuacion() {
    context.fillStyle = "white";
    context.font = "48px Georgia";
    context.fillText(puntosI, ancho_canvas / 4, 30);
    context.fillText(puntosD, (ancho_canvas * 3) / 4, 30);
}

// INCLUIR SONIDO

principal();