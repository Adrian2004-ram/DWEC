


    let repite = true;

    let palabras = new Array();

    while(repite) {

        let palabra = prompt(`Dime una palabra (para salir de cancelar o deje la palabra vacía): `);

        if(palabra == null || palabra == "") {
            repite = false;
        } else {
            palabras.push(palabra);
        }

    }

    let arrayOrdenado = [...palabras].sort((a, b) => b.localeCompare(a))
    
    let mapaOrdenado = mapPalabrasReturn(arrayOrdenado);

    mapaOrdenado.forEach((num, clave) => {
        
        document.write(`<p>${clave} ----- ${num}</p>`);

    });

