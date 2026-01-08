

let mapPalabrasReturn = (arrPalabras) => {

    let mapaPalabras = new Map();

    // if(!(array instanceof Array)){
    if(!Array.isArray(arrPalabras)){

        //no es un array
        return nuil;

    }else {


        for(let clave of arrPalabras) {

            // compureva que exista la clace
            if(mapaPalabras.has(clave)) {

                //si no, la añadimos con contador a 1
                mapaPalabras.set(clave, mapaPalabras.get(clave)+1);

            } else{

                // si no tiene esta palabra(clave)
                mapaPalabras.set(clave, 1);

            }
        }

    }

    return mapaPalabras;

}