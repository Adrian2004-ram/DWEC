
// llamo a lafuncion
let resultado = esPositivo(10);

// declaro una funcion anonima en una variable
let esPositivo = function () {

    // devuelvo un boolean
    return n > 0;

}

/*
* No funciona ya que al ser una funciona anonima asignada a una variable
* La llamada tiene que estar estrictamente debajo de la creacion de la
* funcion
*/