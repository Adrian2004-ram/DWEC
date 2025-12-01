/* 
Contexto:
Un centro de formación necesita un programa para registrar los estudiantes asistentes a un taller,
evitando duplicados y permitiendo combinar listas de distintos días.
*/




function eliminarDuplicidad(arr) {

    // Elimina los duplicados utilizando un método apropiado

    let arrSet = new Set();

    for(let txt of arr) {
        arrSet.add(txt);
    }

    // pasamos el set a arr

    arr = [];

    for(let txt of arrSet) {
        arr.push(txt);
    }

    return arr;

}

function unirArrays(arr1, arr2) {

    // declaramos nuevo array
    let arrDefinitivo = [];

    // metemos datos de dia 1
    for(let p of arr1) {
        arrDefinitivo.push(p);
    }

    // metemos datos de dia 2
    for(let p of arr2) {
        arrDefinitivo.push(p);
    }

    return arrDefinitivo;

}

function cantidadAsisUnic(dia1, dia2) {

    let arrX = unirArrays(dia1, dia2);

    let arrAsisUnic = [];

    for(let p of arrX) {

        let indicePrimero = arrX.find(p);
        let indiceUltiomo = arrX.findLast(p);

        if (indicePrimero === indiceUltiomo) {
            arrAsisUnic.push(p);
        }
        
    }

    return arrAsisUnic;

}

// Crea dos conjuntos:

let dia1 = new Set(["Ana", "Luis", "María", "Carlos"]);
let dia2 = new Set(["María", "Pedro", "Ana", "Lucía"]);

console.log(dia1);
console.log(dia2);

// Combina ambos conjuntos en un nuevo conjunto asistentesTotales sin duplicados.

let arrDefinitivo = eliminarDuplicidad(unirArrays(dia1, dia2));

console.log("Arrays unidos: " + [arrDefinitivo]);

// Muestra la cantidad total de asistentes únicos.

let arrAsisUnic = cantidadAsisUnic(dia1, dia2);

console.log("Cantidad asistentes unicos: " + [...arrAsisUnic]);

