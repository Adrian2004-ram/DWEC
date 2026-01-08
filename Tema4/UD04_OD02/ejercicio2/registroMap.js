const mapaRegistros = new Map();

function obtenerEmail () {

    let emailIngresado = document.getElementById('txtEmail').value;

    return emailIngresado;

}

function rellenarRegistro() {

    // obtenemos email nuevo

    let emailIngresado = obtenerEmail();

    let msj;

    if (mapaRegistros.has(emailIngresado)) {

        msj = `Error en Registro. Usuario Registrado con email ${emailIngresado}`;

    } else {

        const numero = mapaRegistros.size + 1;

        mapaRegistros.set(emailIngresado, numero);

        msj = `Usuario registrado con éxito con email ${emailIngresado}`;

    }

    // muestro mensaje en el html en etiqueta span

    var resultadoRegistro = document.getElementById("resultadoRegistro");

    resultadoRegistro.innerHTML = msj;

    // muestro los correos ingresados

    let msjTabla = "";

    for (const [email, numero] of mapaRegistros) {

        msjTabla = msjTabla + "<tr>";

        msjTabla = msjTabla + '<td style="border: 1px solid black" >';

        msjTabla = msjTabla + `${numero}`;

        msjTabla = msjTabla + '</td> <td style="border: 1px solid black" >';

        msjTabla = msjTabla + `${email}`;

        msjTabla = msjTabla + "</td> </tr>"

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