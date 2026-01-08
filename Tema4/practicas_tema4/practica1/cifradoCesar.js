let cadena = prompt("Escribe el texto que desea cifrar");
let clave;

do{

    clave = prompt("Escriba la clave (numero entero): ");

    //cerifica que no sea un numero
    if(isNaN(Number(clave))) {
        alert("No has escrito un número");
    }

}while (isNaN(Number(clave)));

clave = parseInt(clave);

for(let letra of cadena) {

    //charCodeAt devuelve el código Unicode (ASCII) de la posicion dada
    let cifra = letra.charCodeAt(0) + clave;

    //Convierte un número (código Unicode o ASCII) en su carácter correspondiente.
    //Y lo imprime por pantalla
    document.write(String.fromCharCode(cifra));
}