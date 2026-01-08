let cadena = prompt("Escribe el texto que desea cifrar");
let clave;

let i = 0;

do{

    clave = prompt("Escriba la clave (numero entero): ");

    //cerifica que no sea un numero
    if(isNaN(Number(clave))) {
        alert("No has escrito un número");
    }

}while (isNaN(Number(clave)));

for(let letra of cadena) {

    //charCodeAt devuelve el código Unicode (ASCII) de la posicion dada
    let cifra = letra.charCodeAt(0) + Number(clave.charAt(i)); // charAt() --> metodo de cadena string

    //Convierte un número (código Unicode o ASCII) en su carácter correspondiente.
    //Y lo imprime por pantalla
    document.write(String.fromCharCode(cifra));

    i++;

    //reinicia el contador a 0, si el numero de calve se queda sin cifras
    if(i === clave.length) {
        i=0;
    }

}