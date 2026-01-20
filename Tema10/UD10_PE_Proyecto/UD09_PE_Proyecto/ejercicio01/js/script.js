// Método de apoyo que realiza la petición HTTP según el tipo especificado
// typeOfRequest: tipo de petición HTTP ('GET' o 'POST')
// url: URL del recurso a solicitar
// params: parámetros o datos a enviar (según el tipo de petición)
// callbackFn: función callback que se ejecuta cuando la petición es exitosa
function serverRequest(typeOfRequest, url, params, callbackFn) {
    // Crear objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    // Si es GET y hay parámetros, los agregamos a la URL
    if (typeOfRequest === 'GET' && params) {
        const queryString = new URLSearchParams(params).toString();
        url += '?' + queryString;
    }
    
    // Configurar la petición
    xhr.open(typeOfRequest, url, true);
    
    // Si es POST, configurar el header
    if (typeOfRequest === 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/json');
    }
    
    // Manejar el cambio de estado
    xhr.onreadystatechange = function() {
        // readyState 4 = completado
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Parsear la respuesta JSON
                const data = JSON.parse(xhr.responseText);
                // Ejecutar la función callback con los datos recibidos
                callbackFn(data);
            } else {
                console.error('Error:', xhr.status, xhr.statusText);
                const resultDiv = document.getElementById('result');
                if (resultDiv) {
                    resultDiv.innerHTML = '<p class="alert alert-danger">Error: ' + xhr.status + '</p>';
                }
            }
        }
    };
    
    // Enviar la petición
    if (typeOfRequest === 'POST' && params) {
        xhr.send(JSON.stringify(params));
    } else {
        xhr.send();
    }
}

// Método GET: realiza una petición GET al servidor
// url: URL del recurso a solicitar
// params: parámetros de la petición (se agregan a la URL como query string)
// callbackFn: función que se ejecuta cuando la petición es exitosa
function get(url, params, callbackFn) {
    serverRequest('GET', url, params, callbackFn);
}

// Método POST: realiza una petición POST al servidor
// url: URL del servidor donde enviar los datos
// data: datos a enviar en el cuerpo de la petición
// callbackFn: función que se ejecuta cuando la petición es exitosa
function post(url, data, callbackFn) {
    serverRequest('POST', url, data, callbackFn);
}

// Función para obtener una broma del archivo local
function getLocalJoke() {
    // Usamos el método get() para solicitar el archivo JSON local
    get('data/joke.json', null, function(data) {
        displayJoke(data);
    });
}

// Función para obtener una broma de la API
function getApiJoke() {
    // Usamos el método get() para solicitar una broma de la API externa
    get('https://v2.jokeapi.dev/joke/Any', null, function(data) {
        displayJoke(data);
    });
}

// Función para mostrar la broma en la página
function displayJoke(joke) {
    const resultDiv = document.getElementById('result');
    let html = '<div class="card mt-4">';
    html += '<div class="card-body">';
    html += '<h5 class="card-title">Categoría: ' + joke.category + '</h5>';
    
    if (joke.type === 'single') {
        html += '<p class="card-text"><strong>' + joke.joke + '</strong></p>';
    } else if (joke.type === 'twopart') {
        html += '<p class="card-text"><strong>Setup:</strong> ' + joke.setup + '</p>';
        html += '<p class="card-text"><strong>Delivery:</strong> ' + joke.delivery + '</p>';
    }
    
    html += '<small class="text-muted">ID: ' + joke.id + ' | Lenguaje: ' + joke.lang + '</small>';
    html += '</div>';
    html += '</div>';
    
    resultDiv.innerHTML = html;
}

// Agregar contenido al HTML
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const hr = document.querySelector('hr');
    
    // Crear contenedor de botones
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'mb-3';
    
    // Botón para obtener broma local
    const localBtn = document.createElement('button');
    localBtn.className = 'btn btn-primary mr-2';
    localBtn.textContent = 'Obtener broma local';
    localBtn.addEventListener('click', getLocalJoke);
    
    // Botón para obtener broma de la API
    const apiBtn = document.createElement('button');
    apiBtn.className = 'btn btn-success';
    apiBtn.textContent = 'Obtener broma de API';
    apiBtn.addEventListener('click', getApiJoke);
    
    // Contenedor para resultados
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    
    // Insertar elementos en el DOM
    hr.parentNode.insertBefore(buttonContainer, hr.nextSibling);
    buttonContainer.appendChild(localBtn);
    buttonContainer.appendChild(apiBtn);
    body.appendChild(resultDiv);
});