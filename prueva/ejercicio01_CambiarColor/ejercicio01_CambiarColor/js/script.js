

let init = () => {

    // buscamos btn y body
    let btnBotonCambiar = document.getElementById("btnBotonCambiar");
    let pag = document.querySelector("body");

    if (btnBotonCambiar.addEventListener) {
        btnBotonCambiar.addEventListener("click", function () {
            let c1 = Math.floor(Math.random() * 255);
            let c2 = Math.floor(Math.random() * 255);
            let c3 = Math.floor(Math.random() * 255);
            pag.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
        });
    } else if (btnBotonCambiar.attachEvent) {
        btnBotonCambiar.attachEvent("onclick", function () {
            let c1 = Math.floor(Math.random() * 255);
            let c2 = Math.floor(Math.random() * 255);
            let c3 = Math.floor(Math.random() * 255);
            pag.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
        });
    }

}

window.onload = init;