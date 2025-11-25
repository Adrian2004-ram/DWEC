function showMessage(from, text = 'sin texto') {
    alert(from + ': ' + text);
}

showMessage('Pepe');
showMessage('Maria', '¿Como estas?');

function showMessage2(from, text = anotherFunction()) {

    // anotherFunction() only runs if no text is provided
    //
}