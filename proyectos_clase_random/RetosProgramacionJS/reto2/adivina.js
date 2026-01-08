
//generar un número aleatorio entre 0 y 100
let numAleatorio = Math.random() * 100;
numAleatorio = Math.floor(numAleatorio);

//declaramos contador
let contador = 1;

alert(`El numero es ${numAleatorio}`); //para pruebas,

let numUsuario = prompt(`Adivina el número entre 0 y 100:`);


while (numUsuario != numAleatorio) {

    numUsuario = prompt(`Has fallado el número. \n Adivina el número entre 0 y 100:`);
    contador++;
}

if (numUsuario == numAleatorio) {
    
    alert(`¡Felicidades! Has adivinado el número. \n Has tenido ${contador} intentos.`);

}