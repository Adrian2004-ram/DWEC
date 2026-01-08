

let palabras = function() {

    let repite = true;

    let palabras = new Set();

    while(repite) {

        let palabra = prompt(`Dime una palabra (para salir de cancelar o deje la palabra vacía): `);

        if(palabra == null || palabra == "") {
            repite = false;
        } else {
            palabras.add(palabra);
        }

    }

    let sorted = [...palabras].sort((a, b) => b.localeCompare(a));

    sorted.forEach((pal) => {
    
        document.write(`<p>${pal}</p>`);

    });

}