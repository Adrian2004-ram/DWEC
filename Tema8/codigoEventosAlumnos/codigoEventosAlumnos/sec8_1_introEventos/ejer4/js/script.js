
window.onload = function() {

    let btn = document.getElementById("contadorBoton");
    let contador = document.getElementById("contador");
    let cantidad = 0;

    btn.addEventListener('click', function() {
        cantidad++;
        contador.textContent = 'Clics: ' + cantidad;
    });

}