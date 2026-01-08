
// declaro funcion para calcular porcentajes
let calcularPorcentaje = (numero, porcentaje) => {

    // hago el calculo y lo paso a la variable 'resulFormula'
    let resulFormula = Number(numero) * (Number(porcentaje) / 100);

    return resulFormula;

}

// delcaro funcion para saludar
let saludoSimple = () => {

    // guardo en la variable txt el mensaje
    let txt = 'Hola desde la funcion flecha!';

    // devuelve la cadena
    return txt;

}

/*
*  en una funciona flecha que no recibe parametro es obligatorio
*  usar ()
*/

let init = function (e) {

    // declaro un número
    let num = 25;

    // declaro el porcentaje, para saber el porcentaje del numero que quieras saber

    let porcentaje = 50;

    // llamo a la funcion para que calcule
    let porc = calcularPorcentaje(num, porcentaje);

    // devuelvo por consola la convesion
    console.log(`${num} --> ${porc}`);

    // devuelvo por consala el String que devuelve la funcion saludo
    console.log(saludoSimple());

}

window.onload = init;