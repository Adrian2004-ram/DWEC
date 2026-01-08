

let esPar = (valor) => {

    if(valor % 2 == 0) {

        return true;

    } else {

        return false;

    }

}

let aleatorio = function() {

    let arr = new Array();

    for(let i=0; i<500; i++) {

        let max = 1000;
        let min = 1;

        let num = Math.floor(Math.random()*(max-min+1)+min);

        if(esPar(num)) {
            num += ' es par';
        }else {
            num += ' es impar';
        }

    

        arr.push(num);

    }

    return arr;

}

function init() {


    let arr = aleatorio();

    console.log(arr);


}

window.onload = init;