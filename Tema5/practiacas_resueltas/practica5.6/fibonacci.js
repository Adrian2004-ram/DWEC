

function fibonacci(x) {

    if(x==0) return 0;
    else if(x==1) return 1;
    else return fibonacci(x-1)+fibonacci(x-2);

}

function bucle(num) {

    let arr = new Array();

    for(let i=0; i<=num; i++) {

        arr.push(fibonacci(i));

    }

    return arr;

}

function init(e) {

    let num = prompt(`Dime el numero max de fibonacci: `);

    let arrFibo = bucle(num);

    alert(arrFibo);

}

window.onload = init;