function operacionMatematica(operador, num1, num2, callbackOperador, callbackResult, callbackError) {

    try {

        let resultado = callbackOperador(operador, num1, num2);
        callbackResult(resultado);

    } catch (error) {
        callbackError(error);
    }

}

// funcion callback para realizar la operacion

function cbOperador(operador, num1, num2) {

    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("No se puede dividir por cero");
            }
            return num1 / num2;
        default:
            return 0;
    }
}

function cbResultado(resultado) {
    console.log("El resultado de la operacion es: " + resultado);
}

function cbError(error) {
    console.error("Se ha producido un error: " + error.message);
}

// llamada a la función

operacionMatematica('+', 5, 5, cbOperador, cbResultado, cbError);
operacionMatematica('-', 5, 5, cbOperador, cbResultado, cbError);
operacionMatematica('*', 5, 5, cbOperador, cbResultado, cbError);
operacionMatematica('/', 5, 5, cbOperador, cbResultado, cbError);
operacionMatematica('/', 5, 0, cbOperador, cbResultado, cbError);
operacionMatematica('+', 5, 5, cbOperador, function(result) {
    //Esta es una funcion anonima que actua como callback

    console.log("Resultado con funcion anonima: " + result);
}, cbError);