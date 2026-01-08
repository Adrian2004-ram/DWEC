
// Mezclar numeros

    let numeros = [1, 2, 3];

    numeros.push(4); // añade al final
    numeros.unshift(0); // añade al principio

    let masNumeros = [5, 6];

    console.log('Arrays: ' + masNumeros);

    let combinado = numeros.concat(masNumeros);

    console.log('Arrays combinado: ' +combinado);


// Obtener array en string

    // coge los valores de un array desde 1 hasta 4, sin contar el indice 4
    let subArray = combinado.slice(1, 4); 

    console.log(`Array slice(1, 4): ${subArray}`);

    // copia un array con slice
    let copiaArray = combinado.slice(0, combinado.length); 

    console.log(`Array copia con Slice: ${copiaArray}`);

    // Convertir array en string

    console.log(`Array con join(): ` + combinado.join(", "));

// Búsqueda de elementos en un array

    // indexOf() --> busca el indice del valor puesto entre parentesis
    console.log(combinado.indexOf(3)); // posicion

    // include() --> busca si el valor dentroo de parentesis esta dentroo del arrays
    console.log(combinado.includes(10)); //false

//Modificar orden de elementos

    combinado.reverse();

    console.log(`Array con reverse(): ${combinado}`);

    combinado.sort();

    console.log(`Array con sort(): ${combinado}`);

// Desestructuración de arrays

    let numeros2 = [2, 3, 4];

    let [primero, segundo] = numeros2;

    console.log(primero); // primero es el indice 0 que es 2

    console.log(numeros2[primero]); // coge en el array la posicion 2

    console.log(segundo);