let numero, n;
let salir = false;
let volver;

do { //Se repite este codigo al menos una vez
    
    cont=0;

    //cálculo del numero de 1 al 1000
    numero  = parseInt(Math.random() * 100) +1;

    do{

        // bucle del juego, se repite hasta
        // que el usuario acierte el numero o indique salirç

        do {

            // bucle de petición
            // se repite mientras el usuario no
            // indique un númmero correcto o
            // pulsa canselar

            volver = false;

            n = prompt("Introduce un número entre 1 y 100 (pulsa cancelar para salir):");
            
            // si se cancelo el cuadro
            // la variable centinenla "salir"
            // valdra true

            if (n == null) {
               
                salir = true

                //comprobar que el número es valido

            } else if (isNaN(n) || n < 1 || n > 100) {

                alert("Número no valido");

                volver = true;

            }

        } while (salir == false && volver == true);

        cont++;

        if (salir == false) {
            
            // mensajes de lo cerca o no  que
            // esta el número del usuario
            // solo se muestra si no se pulsó en salir

            if (n < numero) {
                
                alert("El número es mayor")

            } else if (n > numero) { 
                
                alert("El número es menor")

            }

        } 


    } while ( salir == false && n != numero);


    // solo podemos salir se hemos hacertado
    // o hemos cancelado algún cuadro

    if(salir == false) {

        // mensaje de acierto
        alert("¡Acertaste! Intentos: " + cont);

        // pedimos confirmación al usuario para
        // jugar otra vez si no ha indicado que quiere 
        // salir

    }

}while(salir==false && confirm("¿Quieres jugar de nuevo?"));

// mensaje dependiento de lo que eligió el usuario

if (salir) {

    document.write("<h1>Se canceló la partida</h1>");

} else {

    document.write("<h1>Gracias por jugar</h1>");

}