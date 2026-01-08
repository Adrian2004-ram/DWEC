//este es mi código javascript

//suma dos numeros y devuelve el valor
function suma( valor1, valor2) {

    return valor1 + valor2;    

}

//resta dos numeros y devuelve el valor
function resta( valor1, valor2) {

    return valor1 - valor2;    

}

//multiplica dos numeros y devuelve el valor
function producto( valor1, valor2) {

    return valor1 * valor2;    

}

//obtener numeros
function obtenerNumeros() {

    //obtenemos numeros del html
    
    var num1 = document.getElementById('txtNumero1').value;

    var num2 = document.getElementById('txtNumero2').value;

    //combertimos a Numbrer
    
    num1 = Number(num1);

    num2 = Number(num2);

    return [num1, num2];

}



//realiza la operacion de suma
function realizarOperacionSuma() {

    console.log("Realizando operacion suma");

    //obrtener numeros

    var nums = obtenerNumeros();

    //realizarr la suma

    if (!isNaN(nums[0]) && !isNaN(nums[1])) {

       var result = suma( nums[0], nums[1]);

    } else {

        console.log("No se puede hacer la suma");

        return;

    }


    //mostrar el resultado en la etiqueta

    console.log("El resultado es: " + result);

    var lblResultado = document.getElementById('resultadoOp');

    lblResultado.innerHTML = 'suma: ' +  result.toFixed(2);

}

//realiza la operacion de resta
function realizarOperacionResta() {

    console.log("Realizando operacion resta");

    //obrtener numeros

    var nums = obtenerNumeros();

    //realizarr la resta

    if (!isNaN(nums[0]) && !isNaN(nums[1])) {

       var result = resta( nums[0], nums[1]);

    } else {

        console.log("No se puede hacer la resta");

        return;

    }


    //mostrar el resultado en la etiqueta

    console.log("El resultado es: " + result);

    var lblResultado = document.getElementById('resultadoOp');

    lblResultado.innerHTML = 'resta: ' +  result.toFixed(2);

}

//realiza la operacion de producto
function realizarOperacionProducto() {

    console.log("Realizando operacion producto");

    //obrtener numeros

    var nums = obtenerNumeros();

    //realizar la mulotiplicacion

    if (!isNaN(nums[0]) && !isNaN(nums[1])) {

       var result = producto( nums[0], nums[1]);

    } else {

        console.log("No se puede hacer la resta");

        return;

    }


    //mostrar el resultado en la etiqueta

    console.log("El resultado es: " + result);

    var lblResultado = document.getElementById('resultadoOp');

    lblResultado.innerHTML = 'multiplicacion: ' +   result.toFixed(2);

}
//funcion inicializadora
function init() {

    //obtener la refertencia al boton de sumar (brnSumar)
    var btnSumar = document.getElementById('btnSumar');

    //obtener la refertencia al boton de restar (brnRetar)
    var btnRestar = document.getElementById('btnRetar');

    //obtener la refertencia al boton de producto (brnRetar)
    var btnProducto = document.getElementById('btnProducto');

    //obtener el producto de dos numeros

    btnSumar.addEventListener('click', realizarOperacionSuma );
    btnRestar.addEventListener('click', realizarOperacionResta );
    btnProducto.addEventListener('click', realizarOperacionProducto );
}

//Cuando se carga el DOm se carga a init
window.onload = init;