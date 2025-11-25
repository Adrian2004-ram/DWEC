let userName = 'Adrian'; // variable global

function showMessage() {

    userName = 'Juan'; // modifica la variable global

    let msg = 'Hola, ' + userName;
    alert(msg);
}

alert(userName); // Adrian

showMessage(); // dentro de la funcion se modifica el nombre

alert(userName); // Juan