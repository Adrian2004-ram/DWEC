function ask (question, yes, no) {

    if (confirm(question)) yes() // si confirma, se ejecuta la función yes
        
    else no(); // si no confirma, se ejecuta la función no

}

function showOk() {
    alert("Estás de acuerdo.");
}

function showCancel() {
    alert("Estás en desacuerdo.");
}

// Uso de la función showOk y showCancel, son llamadas como argumentos

// ask("¿Estás de acuerdo?", showOk, showCancel);

/* --------------------------------------------------------------------- */

ask(
    "¿Estás de acuerdo?",
    function() { alert("Conforme."); },
    function() { alert("Desconforme."); }
);