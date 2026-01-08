const setRegistros  = new Set();

function obtenerEmail () {

    let emailIngresado = document.getElementById('txtEmail').value;

    return emailIngresado;

}

function rellenarRegistro() {

    // obtenemos email nuevo

    let emailIngresado = obtenerEmail();

    let msj;

    if (setRegistros.has(emailIngresado)) {

        msj = `Error en Registro. Usuario Registrado con email ${emailIngresado}`;

    } else {

        setRegistros.add(emailIngresado);

        msj = `Usuario registrado con éxito con email ${emailIngresado}`;

    }

    // muestro mensaje en el html en etiqueta span

    let resultadoRegistro = document.getElementById("resultadoRegistro");

    resultadoRegistro.innerHTML = msj;

    // muestro los correos ingresados

    let msjTabla = "";
    let cont = 1;

    for (const email of setRegistros ) {

        msjTabla = msjTabla + "<tr>";

        msjTabla = msjTabla + '<td style="border: 1px solid black" >';

        msjTabla = msjTabla + `${cont}`;

        msjTabla = msjTabla + '</td> <td style="border: 1px solid black" >';

        msjTabla = msjTabla + `${email}`;

        msjTabla = msjTabla + "</td> </tr>"

        cont++;

    }

  ;

    let tabla = document.getElementById("tabla");

    tabla.innerHTML = msjTabla;

}

function init () {

    let btmRegistro = document.getElementById("btmRegitro");

    btmRegistro.addEventListener("click", rellenarRegistro)

}

window.onload = init;