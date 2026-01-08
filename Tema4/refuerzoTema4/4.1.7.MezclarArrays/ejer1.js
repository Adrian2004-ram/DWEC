
function sumar(valor1, valor2) {

    let a = 0;
    let b = 0;

    if (Array.isArray(valor1)) {
        for(let i of valor1) {
            a += Number(i);
        }
    } else {
        a = valor1;
    }

    if (Array.isArray(valor2)) {
        for(let i of valor2) {
            b += Number(i);
        }
    } else {
        b = valor2;
    }

    if(isNaN(a) || isNaN(b)) {

        console.log(`El resultado es 0 ya que uno de los valores es texto`);
    
    } else {



        let resultado = a + b;

        console.log(`El resultado de ${a} + ${b} = ${resultado}`);
        
    }

}

sumar(3, 8);

sumar([1, 2, 5], 2);

sumar('Hola', 5);