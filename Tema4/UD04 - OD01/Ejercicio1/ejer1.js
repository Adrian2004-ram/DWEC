/*
* Matriz de dimensiones 3x3 que tenga su diagonal principal con valores 1.
* Escribir la matriz por consola.
*/

let matriz = [];

const filas = 3;
const colum = 3;

for(let i=0; i<filas; i++) {

    matriz[i] = [];
    
    for(let j=0; j<colum; j++) {

        if(i === j) {

        matriz[i][j] = 1;

        } else {
                    
            matriz[i][j] = 0;

        }

    }
}

for(let i=0; i<filas; i++) {

    document.write("<tr>");

    for(let j=0; j<colum; j++) {


        document.write("<td>");

        document.write(`${matriz[i][j]}`);

        document.write("</td>");

    }

    document.write("</tr>");
}

