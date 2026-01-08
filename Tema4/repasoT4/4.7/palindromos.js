function esPali() {

    let text = document.getElementById("txt").value;
    let textReverse = text.split("").reverse().join("");

    let res = document.getElementById("res");

    if(text === textReverse) {
        res.innerHTML = "Es Palidromo";
    } else {
        res.innerHTML = "No es Palidromo";
    }

}

function init() {


    let btnEs = document.getElementById("btnEs");

    btnEs.addEventListener("click", esPali);


}

window.onload = init;