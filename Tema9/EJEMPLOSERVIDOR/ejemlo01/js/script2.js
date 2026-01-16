
/**
 * Initializes the product loading functionality
 * 
 * Sets up an event listener on the "btnCargar" button that:
 * - Creates an XMLHttpRequest object to fetch data from the server
 * - Opens a GET request to "productos.json" asynchronously
 * - Parses the JSON response containing product data
 * - Dynamically creates and displays a list of products with their names and prices
 * - Handles errors if the HTTP status is not 200
 * 
 * @function init
 * @returns {void}
 */

// Define la función init con sintaxis de flecha
    // Obtiene el botón por ID y añade un evento click
    document.getElementById("btnCargar").addEventListener("click",
        function () {
            // Crea una nueva instancia de XMLHttpRequest
            let xhr = new XMLHttpRequest();

            // Configura la solicitud GET al archivo productos.json de forma asincrónica
            xhr.open("GET", "usuario.json", true);

            // Define el manejador que se ejecuta cuando la respuesta es recibida
            xhr.onload = function () {
                // Verifica si la respuesta fue exitosa (status 200)
                if (xhr.status === 200) {
                    // Convierte el texto JSON a un objeto JavaScript
                    let usuarios = JSON.parse(xhr.responseText);

                    // Obtiene la lista HTML por su ID
                    let lista = document.getElementById("listaProductos");
                    // Limpia el contenido previo de la lista
                    lista.innerHTML = "";
                    // Itera sobre cada usuario y crea elementos <li> con nombre y clave
                    usuarios.forEach(user => {
                        let li = document.createElement("li");
                        li.textContent = `${user.usuario} - ${user.clave}`;
                        lista.appendChild(li);
                    });

                // Muestra una alerta si hay error en la carga
                } else {
                    alert("Error al cargar productos");
                }
            };

            // Envía la solicitud al servidor
            xhr.send();
        }
    );

