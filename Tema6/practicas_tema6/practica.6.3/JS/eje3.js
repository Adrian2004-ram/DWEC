

Math.mcd = function (a, b) {

    a = parseInt(Number(a));
    b = parseInt(Number(b));

    // Si no son numeros, devolver NaN
    if (isNaN(a) || isNaN(b)) {
        return NaN; 

    // Devuelve 0 si uno de los dos es 0
    } else if (a==0 || b==0) {
        return 0;
    }

    // Los pasa a positivos
    a = Math.abs(a);
    b = Math.abs(b);

    if(a%b != 0) {
        return Math.mcd(b, a%b)
    } else {
        return b;
    }

}

Math.mcm = function (a, b) {

    a = parseInt(Number(a));
    b = parseInt(Number(b));

    // Si no son numeros, devolver NaN
    if (isNaN(a) || isNaN(b)) {
        return NaN; 

    // Devuelve 0 si uno de los dos es 0
    } else if (a==0 || b==0) {
        return 0;
    }

    // Los pasa a positivos
    a = Math.abs(a);
    b = Math.abs(b);

    return (a*b) / Math.mcd(a,b);

}

console.log("MCD de 60 y 24: " + Math.mcd(60, 24)); // 12
console.log("MCM de 60 y 24: " + Math.mcm(60, 24)); // 120

function Fraccion(numerador, denominador) {

    // Variables privadas
    var _numerador=numerador;
    var _denominador=denominador;

    // Fraccion nula si no se recibe parametros
    if(isNaN(parseInt(Number(numerador)))) return null;
    if(isNaN(parseInt(Number(denominador)))) return null;

    // Metodos Get
    
    this.getNumerador=()=>_numerador;

    this.getDenominador=()=>_denominador;

    // Metodos Set

    this.setNumerador = (numerador) =>{

        if(isNaN(parseInt(Number(numerador))) == false) {

            _numerador = parseInt(numerador);
        }
    };

    this.setDenominador = (denominador) =>{

        if(isNaN(parseInt(Number(denominador))) == false) {

            _denominador = parseInt(denominador);
        }
    };

    // Cambiuar Fraccion

    this.cambiarFraccion = (numerador, denominador) => {

        this.setNumerador(numerador);
        this.setDenominador(denominador);
    };

    // String

    this.toString = () => {
        return _numerador + "/" + _denominador;
    };

    // Simplificar Fraccion
    // Ejemplo: 60/24 -> 5/2

    this.simplificar = () => {

        if(_numerador != 0 && _denominador != 0) {

            if(Math.sign(_numerador) == Math.sign(_denominador)) {

                _numerador = Math.abs(_numerador);
                _denominador = Math.abs(_denominador);

            }else {

                if(_numerador >= 0) {
                    _numerador = - _numerador;
                    _denominador = - _denominador;
                }

            }

            let mcd = Math.mcd(_numerador, _denominador);

            _numerador = _numerador / mcd;
            _denominador = _denominador / mcd;

        }

    };

    this.suma = (f) => {

        let mcm = Math.mcm(_denominador, f.getDenominador());

        let denominadorRes = mcm;
        let numeradorRes = (mcm / _denominador) * _numerador + 
                            (mcm / f.getDenominador()) * f.getNumerador();

        let res = new Fraccion(numeradorRes, denominadorRes);
        
        res.simplificar();

        return res;

    };

    
    this.resta = (f) => {

        let mcm = Math.mcm(_denominador, f.getDenominador());

        let denominadorRes = mcm;
        let numeradorRes = (mcm / _denominador) * _numerador - 
                         (mcm / f.getDenominador()) * f.getNumerador();

        let res = new Fraccion(numeradorRes, denominadorRes);
        
        res.simplificar();

        return res;

    };

    this.multiplicar = (f) => {

        let res = new Fraccion((_numerador * f.getNumerador()),
                                 (_denominador * f.getDenominador()));

        res.simplificar();

        return res;

    };

    this.division = (f) => {

        let res = new Fraccion((_numerador * f.getDenominador()),
                                 (_denominador * f.getNumerador()));

        res.simplificar();

        return res;

    };

}

// Declaro Fracciones
var fl=new Fraccion(6,10);
var f2=new Fraccion(6,4);
var f3=new Fraccion(60,24);

// Modifico Numerados de f1
fl.setNumerador(3);

// Muestro Fracciones
console.log(fl.toString()); //Escribe 3/10
console.log(f2.toString()); //Escribe 6/4
console.log(f3.toString()); //Escribe 60/24

// Simplifico f3
f3.simplificar();

// Muestro f3 simplificada
console.log(f3.toString()); //Escribe 5/2

// Operaciones
var fSuma=fl.suma(f2);
var fResta=fl.resta(f2);
var fMultiplica=fl.multiplicar(f2);
var fDivide=fl.division(f2);

// Muestro Resultados
console.log(fSuma.toString()); //Escribe 9/5
console.log(fResta.toString()); //Escribe -6/5
console.log(fMultiplica.toString()); //Escribe 9/20
console.log(fDivide.toString()); //Escribe 1/5