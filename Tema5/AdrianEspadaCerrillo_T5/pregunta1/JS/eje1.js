
//creo una funcion
function celsiusToFahrenheit(celcius) {

    // declaro variable donde almaceno la conversion
    let fahrenheit;

    // calculo que pasa los gragos Cº a Fº
    fahrenheit = (celcius * 9 / 5 + 32);

    // devuelve el calculo
    return fahrenheit;

};

let init = (e) => {

    // grados Cº que quiero convertir
    let cel = 5;

    // llamo a lafuncion para converir de Cº a Fº
    let fahren = celsiusToFahrenheit(cel);

    // muestro por consola la conversion
    console.log(`${cel} grados Celcius son ${fahren} grados Farenhait`);

    // fahrenheit desde fuera de la función
    console.log(fahrenheit);

    /*
    * Da error ya que fahrenheit es una variable local
    * definida en otra funcion, si quieres usarla aqui
    * temdria que ser una variable global
    */

}

window.onload = init;