// Reto 1: Conversor

//declaramos las costantes de conversion
const euroADolar = Number(1.16);
const euroALibra = Number(0.87);

//pregunt al usuario que introduaca una cantidad de Euros
let euros = prompt("Introduce la cantidad en euros (como números) : ");

//usamos trim para eliminar espacios en blanco
euros = euros.trim();

//comprobamos que el valor introducido es un número
if (isNaN(euros)) {
    alert("Por favor, introduce un número válido.");
} else {

    let dolares = Number(euros) * euroADolar;
    let libras = Number(euros) * euroALibra;

    //mostramos el resultado al usuario
    alert(`${euros}€ son ${dolares}$ y ${libras}£`);

}

