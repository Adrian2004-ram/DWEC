const listaRegistros = [];

function obtenerEmail () {

    let emailIngresado = document.getElementById('txtEmail').value;

    return emailIngresado;

}

function rellenarRegistro() {

    // obtenemos email nuevo

    let emailIngresado = obtenerEmail();

    let msj;

    if (listaRegistros.includes(emailIngresado)) {

        msj = `Error en Registro. Usuario Registrado con email ${emailIngresado}`;

    } else {

        listaRegistros.push(emailIngresado);

        msj = `Usuario registrado con éxito con email ${emailIngresado}`;

    }

    // muestro mensaje en el html en etiqueta span

    var resultadoRegistro = document.getElementById("resultadoRegistro");

    resultadoRegistro.innerHTML = msj;

    // muestro los correos ingresados

    let msjTabla = "";

    for (let i=0; i<listaRegistros.length; i++) {

        msjTabla = msjTabla + "<tr>";

        msjTabla = msjTabla + '<td style="border: 1px solid black" >';

        msjTabla = msjTabla + `${Number(i + 1)}`;

        msjTabla = msjTabla + "</td>";

        msjTabla = msjTabla + '<td style="border: 1px solid black" >';

        msjTabla = msjTabla + `${listaRegistros[i]}`;

        msjTabla = msjTabla + "</td>";

        msjTabla = msjTabla + "</tr>"

    }

  ;

    var tabla = document.getElementById("tabla");

    tabla.innerHTML = msjTabla;

}

function init () {

    var btmRegistro = document.getElementById("btmRegitro");

    btmRegistro.addEventListener("click", rellenarRegistro)

}

window.onload = init;