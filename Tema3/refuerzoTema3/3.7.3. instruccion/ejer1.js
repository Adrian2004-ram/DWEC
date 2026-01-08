
// Pide al usuario un numero y mestra se es positivo, negativo o cero

let numero = Number(prompt("Dime un numero: "));

if(numero > 0) {
    
    alert("El numero introducido es positivo.");

} else if(numero == 0) {

    alert("El numero introducido es cero.");
    
} else if(numero < 0) {

    alert("El numero introducido es negativo.");
    
}