// declaramos variables

let name;
let pasword;

// Avisa de la corrección del nombre
let nombreOK;
let paswordOK;

// Avisa de la corrección de la contraseña
let conmtraseñaOK;

//centinelas de cada premisa para la contraseña
let hayMinusculas=false;
let hayMayusculas=false;
let hayNumeros=false;
let hayOtros=false;

//strings con las letras preparadas
const minusculasYnums = "aábcdeéfghiíjklmnñoópqrstuúüvwxyz0123456789";
const minusculas = "aábcdeéfghiíjklmnñoópqrstuúüvwxy";
const numeros = "0123456789";


/* VALIDAMOS NOMBRE */

do {

    name =  prompt(`Ingresa tu nombre: `);

    // valida que el nombre no sea null --> nameCorrectFrom = false para repetir el bucle

    if (name == null) {

        nombreOK = false;


    } else {

        nombreOK = true; // asumimos que está bien hasta encontrar un error

        for (let i = 0; nombreOK && i < name.length; i++) {

            let caracter = name.charAt(i);
            
            // valida que el nombre tenga las minusculas --> nameCorrectFrom = false para repetir el bucle

            if(minusculasYnums.indexOf(caracter) === -1){

                //no se encontró el carácter en las minúsculas
                nombreOK = false;

                alert("El usuario es incorrecto \nSolo se admiten minúsculas y numeros");

            }

            // Se repite el bucle hasta que se revisen todas las minusculas, si falta
            // una minuscula se vuelve a preguntar el nombre con el prompt

        }

    }

} while(nombreOK == false);

/* VALIDAMOS CONTRASEÑA */

do {

    pasword =  prompt(`Ingresa tu constraseña: `);


    if (pasword == null) {

        paswordOK = false;


    } else {

        hayMinusculas = false;
        hayMayusculas = false;
        hayNumeros = false;
        hayOtros = false;

        paswordOK = true; // asumimos que está bien hasta encontrar un error

        for (let i = 0; paswordOK && i < pasword.length; i++) {

            let caracter = pasword.charAt(i);

            //validamos si hay alguna letra minúscula
            if(minusculas.indexOf(caracter) != -1){

                hayMinusculas=true;
            
            //validamos si hay alguna letra mayúscula
            } else if (minusculas.toUpperCase().indexOf(caracter) != -1) {

                hayMayusculas=true;

            //validamos si hay algún número
            } else if(numeros.indexOf(caracter) != -1){        

                hayNumeros=true;

            } else { //es otro tipo de carácter

                hayOtros=true;

            }

        }

        paswordOK = (
            hayMinusculas == true &&
            hayMayusculas == true &&
            hayNumeros == true &&
            hayOtros == true
        );

        if(paswordOK == false) {
            alert("La contraseña es incorrecta \n" +
                "Debe contener minúsculas, mayúsculas," +
                " números y otros símbolos");
        }

    }

    console.log(
        "Mayúsculas: "+ hayMayusculas +
        ", Minúsculas: "+ hayMinusculas +
        ", Números: " + hayNumeros +
        ", Símbolos: " + hayOtros
    );

} while(paswordOK == false);

//mensajes finales
if(paswordOK && nombreOK){

    document.write("<p>Datos almacenados</p>");
    document.write(`<p>Nombre: ${name}</p>`);
    document.write(`<p>Contraseña: ${pasword}</p>`);


}
else{

    document.write("<p>El usuario canceló la operación</p>");

}