/* Comenzamos ejercicios */

let num;

function numAleatorio() {

    let numAlea = Math.floor(Math.random()*100);

    return numAlea;
    
}

function corregir(num) {

    // guardamos p donde imprimiramos el resultado

    let cuadroNum = document.getElementById("numeroUsuario");
    
    let parrafo = document.getElementById("parrafo");

    let texto = "";

    if(num === Number(cuadroNum.value)) {
        texto = `EL numero es correcto --> ${num}`;
    } else if(num<Number(cuadroNum.value)) {
        texto = `El numero introducido en MENOR que el que tienes que adivinar`
    } else if(num>Number(cuadroNum.value)) {
        texto = `El numero introducido en MAYOR or que el que tienes que adivinar`
    }

    parrafo.innerHTML = texto;
}

function init() {

    // inicializamos num ALeatorio cuando le das a play

    let btmPlay = document.getElementById("btmPlay");
    
    let btmAdivinar = document.getElementById("btmAdivinar")
    
   const parrafo = document.getElementById("parrafo");

    parrafo.innerHTML = "Haz clic en 'Play' para comenzar.";

    btmPlay.addEventListener("click", function() {
        event.preventDefault();
        num = Number(numAleatorio());
        console.log(`Número aleatorio: ${num}`)
    });

    // el jugador adivina
;

    btmAdivinar.addEventListener("click", function() {
        event.preventDefault();
        corregir(num)
    });


}

window.onload = init;