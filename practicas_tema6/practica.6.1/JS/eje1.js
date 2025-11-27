

function Punto(x, y) {

    this.x = x;
    this.y = y;

    this.cambiar = function(x, y) {
        this.x = x;
        this.y = y;
    }

    this.copia = () => (this);

    this.iguales = (p2) => {

        let xIgual = (this.x == p2.x);
        let yIgual = (this.y == p2.y);

        return xIgual && yIgual;

    };

    this.suma = (p2) => {

        let nX = this.x + p2.x;
        let nY = this.y + p2.y;

        return new Punto(nX, nY);

    };

    this.obtenerDistancia = function(p2) {
        return Math.sqrt(
            Math.pow(Math.abs(this.x-p2.x),2) +
            Math.pow(Math.abs(this.y-p2.y),2)
        )
    };

    this.toString = () => (`(${this.x},${this.y})`);

}

//Prueba de los métodos y construcciones
let p = new Punto(1,2);
let q = new Punto(6,-3);

//modificamos coordendas de p
p.cambiar(-5,2);

//r será una copia de p
let r = p.copia()
r.x = 9;

//comprobamos que r y p son puntos distintos
console.log("p: "+p.toString());
console.log("r: "+r.toString());

//s es un nuevo punto que toma la suma de coordenadas
//de p y r
let s = p.suma(r);
console.log("s: "+s.toString());

//Obtener distancia entre p y q
console.log("Distancia entre p y q: " + p.obtenerDistancia(q));