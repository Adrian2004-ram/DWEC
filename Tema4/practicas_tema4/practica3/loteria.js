
//num combinaciones
const numCombinaciones = 50;

//digitos por loteria
const numDigitos = 6;

//array de combinaciones
const primitiva = [];

// Crearemos un array de 49 elementos con cada uno de los números del 1 al 49.
for(let i = 0; i < numCombinaciones; i++) {
    primitiva[i] = i + 1;
}

for (let i = 0; i < numCombinaciones; i++) {

    for (let j = 0; j <= numCombinaciones; j ++) {

        let i1 = parseInt(Math.random() * primitiva.length);
        let i2 = parseInt(Math.random() * primitiva.length);

        // Moveremos los elementos de forma aleatoria en el array.
        [primitiva[i1],primitiva[i2]] = [primitiva[i2],primitiva[i1]];

    }

    document.write(`<h2>Combinación número ${i}</h2>`);
    
    //mostrar seis primeros elementos del array
    document.write("<p>");

    for(let j =0; j < numDigitos; j ++){
    document.write (`${primitiva[j]}`)
    }

    document.write("</p>");

}

