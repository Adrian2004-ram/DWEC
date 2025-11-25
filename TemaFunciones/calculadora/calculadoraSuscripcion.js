
let suma = (a, b) => a + b;

function botonClickHandeler(e) {

    // impide que se envie por defecto el usuario
    e.preventDefault(); // poner cuando hay tiqueta form

    let valor1 = document.getElementById("v1");
    let valor2 = document.getElementById("v2");

    let resultado = suma(valor1.valueAsNumber, valor2.valueAsNumber);

    let resultadoElement = document.getElementById("resultado");

    resultadoElement.innerHTML = resultado;

};

function botonClickSuscribirseHandeler(e) {
    
    // impide que se envie por defecto el usuario
    e.preventDefault(); // poner cuando hay tiqueta form

    

}

let init = (e) => {

    // obtenemos referencia al boton
    let btnSumarElement = document.getElementById("btnSumar");

    btnSumarElement.addEventListener("click", botonClickHandeler);

};

window.onload = init;