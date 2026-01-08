
// Creamos un objeto producto
let producto = {
    // Añadimos propiedades
    nombre: 'portatil',
    precio: 650,
    stock: 30
};

// Añadimos metodo mostrarInfo

producto.mostrarInfo = function () {
    return `${this.nombre} - ${this.precio} $`;
}

console.log(producto.mostrarInfo());

// Añadimos metodo vender

producto.vender = function () {
    this.stock -= 1;
}

producto.vender();

console.log(`Queda en stock ${producto.stock}`);

// Mostrar propiedades del objeto

console.log("PROPIEDADES DE PRODUCTO: ");

for (let clave in producto) {
    if (typeof (producto[clave]) != "function") {
        console.log(`${clave}: ${producto[clave]}`);
    }
}

