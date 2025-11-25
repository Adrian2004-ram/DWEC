
// funcion declarativa
function unirNombres(nombre, apellido) {

    // concateno los valores de entrada
    return nombre + " " + apellido;

}

// funcion anonima
let unirConExpresion = function (nombre, apellido) {

    // concateno los valores de entrada
    return nombre + " " + apellido;

}

let init = function (e) {

    // llamo a la funcion declarativa con los parametros necesarios
    let nameComplet = unirNombres('Jose', 'Garcia');

    // devuelvo el String que devuelve la funcion declarativa
    console.log(nameComplet);

    // llamo a la funcion anonima con los parametros necesarios
    let nameCompletFuncAnonima = unirConExpresion('Adrian', 'Espada');
    
    // devuelvo el String que devuelve la funcion anonima
    console.log(nameCompletFuncAnonima);

    // llamo a la funcion declarativa ssin los parametros necesarios
    let nameComplet2 = unirNombres();

    // devuelvo lo que te devuelva la funcion
    console.log(nameComplet2);

    /* 
    * devuelve --> undefinied unfefinied
    * ya que no se le han asignado ningun valor a nombre y apellido
    */

}

window.onload = init;