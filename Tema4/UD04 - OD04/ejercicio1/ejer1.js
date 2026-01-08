// Ejercicio 1

function rango( inicio, fin, paso=1) {

    let array = [];

    if (inicio > fin) {

        let almacen;

        almacen = inicio;

        inicio = fin;

        fin = almacen;

    }

    for (let i=inicio; i<=fin; i+=paso) {

        console.log(i);

        array.push(i);

    }

    return array;

}

function suma( lista) {

    let suma = 0;

    for(let num of lista) {

        suma += num;

    }

    alert(`la suma de la lista de numeros es: ${suma}`);

    return suma;
    
}

function init() {

    alert(rango(50, 60, 1));

   // suma(rango(1, 10));s

}

window.onload = init;