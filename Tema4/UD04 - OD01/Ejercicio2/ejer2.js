/*
* Crear un formulario. Solicitar al usuario el número de columnas y filas.
* También el número máximo, que será un valor máximo, donde se generará un 
* número aleatorio para cada celda entre 0 y el número máximo introducido por el usuario.
* Las dimensiones máximas del array son 10 filas x 10 columnas.
* Crear un botón que muestre el texto "mostrar matriz", y al hacer click se muestre dicha 
* matriz calculada como una tabla html , donde cada celda contendrá el número entre 0 y el 
* máximo solicitado al usuario.
*/


//este es mi código javascript

//suma dos numeros y devuelve el valor
function suma( valor1, valor2) {

    return valor1 + valor2;    

}

//obtener numeros
function obtenerNumeros() {

    //obtenemos numeros del html
    
    var numFilas = document.getElementById('numFilas').value;

    var numColumnas = document.getElementById('numColumnas').value;

    var randomMax = document.getElementById('randomMax').value;


    //combertimos a Numbrer
    
    numFilas = Number(numFilas);

    numColumnas = Number(numColumnas);

    randomMax = Number(randomMax);


    return [numFilas, numColumnas, randomMax];

}

//realiza la operacion de suma
function realizarMatrizAleatoria() {

    //obrtener numeros

    var nums = obtenerNumeros();

    //declaramos las variables

    var numFilas = nums[0];
    var numColumnas = nums[1];
    var randomMax = nums[2];

    //numMax de filas i columas

    if(numFilas>10) {
        numFilas = 10;
    }

    if(numColumnas>10) {
        numColumnas = 10;
    }


    //creo matriz

    const matriz = [];

    // relleno matriz

    for(let i=0; i<numFilas; i++) {

    matriz[i] = [];
    
    for(let j=0; j<numColumnas; j++) {

        matriz[i][j] = parseInt(Math.random()*randomMax);

    }
}


    //mostrar el resultado

    var tablaHTML = "";

    for(let i=0; i<numFilas; i++) {

        tablaHTML = tablaHTML + '<tr style="border: 1px solid black" >';

        for(let j=0; j<numColumnas; j++) {


            tablaHTML = tablaHTML + '<td style="border: 1px solid black" >';

            tablaHTML = tablaHTML + `${matriz[i][j]}`;

            tablaHTML = tablaHTML + '<td>';

        }

        tablaHTML = tablaHTML + '</tr>';


    }

    document.getElementById('resultTabla').innerHTML = tablaHTML;

}

//funcion inicializadora
function init() {

    //obtener la refertencia al boton de sumar (brnSumar)
    var btmMatriz = document.getElementById('btmMatriz');

    //obtener el producto de dos numeros

    btmMatriz.addEventListener('click', realizarMatrizAleatoria);

}

//Cuando se carga el DOm se carga a init
window.onload = init;