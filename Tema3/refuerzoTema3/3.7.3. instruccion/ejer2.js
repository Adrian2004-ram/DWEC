
// Programa que pregunte la edad y diga si puede votar o no

let edad = Number(prompt("Introduzca tu edad y te dire si puedes votar o no: "));

if(edad >= 18) {

    alert("Puedes votar, eres mayor de edad.");

} else if (edad < 18) {

    alert("Eres menor de edad, no puedes votar.");

}