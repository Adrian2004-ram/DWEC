/**
 * Valida que al menos haya dos caracteres alfabéticos en el elemento 
 * (Usa caracteres de lengua española)
 * @param {Element} elemento
 */
function validarTexto(elemento) {
    if (/[A-Za-zñÑáéíóúüÁÉÍÓÚÜ]{2}/.test(elemento.value)) {
        elemento.classList.add("verde");
    } else {
        elemento.classList.remove("verde");
    }
    comprobarTodoValido();
}

/**
 * Valida que el Elemento contiene como
 * valor un Email válido
 * Solo mira que haya alguna letra, un símbolo @
 * y otra letra
 * @param {Element} elemento
 */
function validarEmail(elemento) {
    if (/.*[A-Za-z].*@.*[A-Za-z].*/.test(elemento.value)) {
        elemento.classList.add("verde");
    } else {
        elemento.classList.remove("verde");
    }
    comprobarTodoValido();
}


/**
 * Acude al servicio de internet de validación
 * de NIFs para validar la corrección del mismo
 * @param {Element} elemento
 */
function validarNIF(elemento) {
    if (/^[0-9]{8}[A-Z]$/.test(elemento.value)) {
        elemento.classList.add("verde");
    } else {
        elemento.classList.remove("verde");
    }
    comprobarTodoValido();
}

/**
 * Comprueba si todo el formulario es válido
 * y si lo es, se activa el boton
 */
function comprobarTodoValido() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var email = document.getElementById("email");
    var NIF = document.getElementById("NIF");
    var boton = document.getElementById("boton");

    if (
        nombre.classList.contains("verde") &&
        apellidos.classList.contains("verde") &&
        email.classList.contains("verde") &&
        NIF.classList.contains("verde")
    ) {
        boton.disabled = false; // habilita el botón si todo es válido
    } else {
        boton.disabled = true; // Deshabilita el botón si falta algo o no está correctamente
    }
}

/**
 * Configura los eventos al cargar la página
 */

window.addEventListener("load", (ev) => {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var email = document.getElementById("email");
    var NIF = document.getElementById("NIF");
    var boton = document.getElementById("boton");
    var telon = document.getElementById("telon");
    var mensaje = document.getElementById("mensaje");

    nombre.addEventListener("keyup", (ev) => {
        validarTexto(nombre);
    });

    apellidos.addEventListener("keyup", (ev) => {
        validarTexto(apellidos);
    });

    email.addEventListener("keyup", (ev) => {
        validarEmail(email);
    });

    NIF.addEventListener("keyup", (ev) => {
        validarNIF(NIF);
    });

    boton.addEventListener("click", (ev) => {
        ev.preventDefault();
        telon.style.display = "block";
        mensaje.style.display = "block";
    });

    telon.addEventListener("click", (ev) => {
        location = "index.html";
    });

    mensaje.addEventListener("click", (ev) => {
        location = "index.html";
    });
});
