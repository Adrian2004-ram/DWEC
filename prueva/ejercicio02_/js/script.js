
let init = () => {

    // lista
    let lista = document.getElementById("miNav");

    //añadir evento
    lista.onclick = function() {
        let evento = evento || window.event;
        let elemento = evento.target || evento.srcElement;
        console.log(elemento.innerHTML);
    }

}

window.onload = init;