// Funcion que realiza peticion GET mediante XMLHttpRequest
// url: URL de la API de carros
// callbackFn: funcion callback que recibe los datos JSON
function peticionesCarros(url, callbackFn) {
    let xml = new XMLHttpRequest();
    
    // Configurar la peticion GET
    xml.open('GET', url, true);
    
    // Establecer el callback cuando cambie el estado
    xml.onreadystatechange = function() {
        // readyState 4 = completado
        if (xml.readyState === 4) {
            if (xml.status === 200) {
                // Parsear la respuesta JSON
                const data = JSON.parse(xml.responseText);
                // Ejecutar el callback con los datos
                callbackFn(data);
            } else {
                console.error('Error en la petición:', xml.status, xml.statusText);
            }
        }
    };
    
    // Enviar la peticion
    xml.send();
}

// Array global para almacenar los productos
let productosDisponibles = [];

// Funcion que agrega una fila a la tabla con los datos del producto
// productId: ID del producto a obtener
// quantity: cantidad del producto en el carro
function fetchProductDetail(productId, quantity) {
    // Buscar el producto en el array local
    const producto = productosDisponibles.find(p => p.id === productId);
    
    if (producto) {
        // Obtener el tbody de la tabla de detalles
        const tbody = document.getElementById('cart-details-body');
        
        // Crear una nueva fila con los datos del producto
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${quantity}</td>
            <td>${producto.title}</td>
            <td><img src="${producto.image}" alt="${producto.title}" width="50"></td>
            <td>$${producto.price}</td>
        `;
        
        // Agregar la fila a la tabla
        tbody.appendChild(row);
    } else {
        console.error('Producto no encontrado:', productId);
    }
}



// Funcion que muestra los detalles de un carro
// cart: objeto carro con id, userId, date y products
function displayCartDetails(cart) {
    const detailsContent = document.getElementById('cart-details-content');
    
    // Mostrar encabezado con información del carro
    detailsContent.innerHTML = `
        <h2>Detalles del Carro (ID: ${cart.id})</h2>
        <p><strong>Usuario ID:</strong> ${cart.userId}</p>
        <p><strong>Fecha:</strong> ${new Date(cart.date).toLocaleDateString()}</p>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID del Producto</th>
                    <th>Cantidad</th>
                    <th>Título</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody id="cart-details-body">
                <tr><td colspan="5" class="text-center">Cargando productos...</td></tr>
            </tbody>
        </table>
    `;
    
    // Actualizar la referencia al tbody y limpiarlo
    const tbody = document.getElementById('cart-details-body');
    tbody.innerHTML = '';
    
    // Obtener detalles de cada producto usando fetchProductDetail
    cart.products.forEach((item) => {
        fetchProductDetail(item.productId, item.quantity);
    });
}

// Funcion que muestra la tabla de carros
function mostrarTablaCarros(carros) {
    const tableBody = document.getElementById('carts-table-body');
    tableBody.innerHTML = '';
    
    carros.forEach(carro => {
        const row = document.createElement('tr');
        
        // Crear celdas con los datos
        row.innerHTML = `
            <td>${carro.id}</td>
            <td>${carro.userId}</td>
            <td>${carro.date}</td>
        `;
        
        // Agregar evento click para mostrar detalles
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => {
            displayCartDetails(carro);
        });
        
        tableBody.appendChild(row);
    });
}

// Cargar los carros al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    // Primero cargar los productos
    peticionesCarros('js/products.json', (productos) => {
        productosDisponibles = productos;
        
        // Luego cargar los carros
        peticionesCarros('js/carts.json', mostrarTablaCarros);
    });
});