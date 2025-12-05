
// Objeto JSON

let objJson = '{"idPedido": "1", "cliente": "Adrian Espada", "total": "758.5", "productos": [ {"idProducto":"1", "nombre":"portatil", "descripcion":"portatil mac", "precio":"750", "cantidad":"1", "subtotal": "750"}, {"idProducto":"2", "nombre":"raton", "descripcion":"raton logitec", "precio":"8.5", "cantidad":1, "subtotal": "8.5"} ] }';

// Creamos objeto pedido
// En el que pasamos el JSON a onjeto
let pedido = JSON.parse(objJson);

// Agregamos funcion

pedido.agregarProductoAPedido = function(id, nom, des, pre, can, sub) {
    let newProducto = {idProducto:id, nombre:nom, descripcion:des, precio:pre, cantidad:can, subtotal: sub};
    this.productos.push(newProducto);
}

pedido.agregarProductoAPedido(3, "teclado","teclado gamer", "1", "51");

// Mostramos el JSON

console.log(`formato JSON ==> ${objJson}`);

console.log('------------------------');

// Mostramos el objeto pedido

pedido.getInfoPedido = function() {
    console.log("PROPIEDADES DE PEDIDO: ");

    for (let clave in this) {
        if (typeof (this[clave]) != "function") {
            console.log(`${clave}: ${this[clave]}`);
        }
        if (typeof (this[clave]) == "object") {
            let lista = this[clave];
            for(let n of lista) {
                console.log(n);
            }
        }
    }
};


pedido.getInfoPedido();

// Comvertimos a JSON

let newJson = JSON.stringify(pedido);

console.log('------------------------');

console.log(newJson);