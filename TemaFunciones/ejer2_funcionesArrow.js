
// Funcoon callback

function ask(question, yes, no) {
    if (confirm(question)) 
        yes()
    else 
        no();
}

ask(
    "Do you agree?",
    function(){ alert("You agreed.") },
    function(){ alert("You canceled the execution..") },
);

// Funciones flecha

let ask2 = (question, yes, no) => {
    if (confirm(question)) 
        yes()
    else 
        no();
};

ask2(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

// ------------------------------------------------------

window.onload = (e) => {


};

// ------------------------------------------------------

window.onload = function(e) {


}

// ------------------------------------------------------

let init = (e) => {

    // obtenemos referencia al boton
    let btnSumarElement = document.getElementById("btnSumar");

    /* Asociacion de eventos click */

    // manejadir de evento con funcion anononima
    btnSumarElement.addEventListener("click", function(e) {
    });

    // manejador con funcion global
    btnSumarElement.addEventListener("click", manejadorClickGlobal);

    // manejador de evento con arrow function
    btnSumarElement.addEventListener("click", e => {
    });

    btnSumarElement.addEventListener("click", (e) => {
    });

}
