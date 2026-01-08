

let texto = prompt("Escribe el texto que desees: ");

let posicion;

if(texto != null) {
    do {

        posicion = prompt("Escriba la posición de este texto (número del 1 al 10): ");

        if(posicion != null) {
            posicion = parseInt(Number(posicion));
            if(isNaN(posicion) || posicion < 1 || posicion > 10) {
                alert("Número no válido");
            }
        }

    } while(posicion != null && (isNaN(posicion) || posicion<1 || posicion>10));

    // Colocacion del texto en su posicion
    let lista = document.getElementsByTagName("ul")[0];

    let nuevoElemento = document.createElement("li");

    nuevoElemento.innerHTML = `<strong>${texto}</strong>`;

    if(posicion == 10) {
        // si el número es el 10 se añade al final
        lista.appendChild(nuevoElemento);
    } else {
        // si no se añade delante de la posicion indica
        // Se resta uno porque se numera desde el 0
        let liSiguiente = lista.children[posicion-1];
        lista.insertBefore(nuevoElemento, liSiguiente);
    }
}