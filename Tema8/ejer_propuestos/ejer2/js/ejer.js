

let init = () => {

    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        alert('Haz hecho click en el botón');
    });

}

window.onload = init;