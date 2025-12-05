
// Creamos la funcion constructora Empleado
let Empleado = function (nom, sal, dep) {
    this.nombre = nom;
    this.salario = sal;
    this.departamento = dep;
}

// Creamos el objeto de la clase Empleado

let trabajador1 = new Empleado("Adrian", 1430, "Informatica");

let trabajador2 = new Empleado("Laura", 950, "Limpieza");

// Añadimos un metodo al prototype

Empleado.prototype.subirSalario = function (porcentaje) {
    let aumento = this.salario * porcentaje;
    this.salario += aumento;
}

// Llamamos al método

trabajador1.subirSalario(0.1);

console.log(trabajador1.salario);

// Comprobar si los trabajadortes son instancias de empoleado

console.log("¿Trabajador 1 es instancia de persona? " + (trabajador1 instanceof Empleado));
