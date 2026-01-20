document.addEventListener('DOMContentLoaded', () => {
    const charactersContainer = document.getElementById('characters-container');
    const btnMore = document.getElementById('btnMore');

    // Estado de paginacion de la API
    let currentPage = 1;
    let totalPages = null;
    let isLoading = false;

    // Peticion GET del archivo JSON local
    // callbackFn: funcion a ejecutar con los datos JSON recibidos
    function pedirPaginaPersonajesRM(callbackFn) {
        const url = 'js/character_rm.json';
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener el archivo JSON');
                }
                return response.json();
            })
            .then(data => callbackFn(data))
            .catch(error => {
                console.error('Error:', error);
                btnMore.textContent = 'Error al cargar';
                btnMore.disabled = true;
            });
    }

    // Crea y devuelve un card de Bootstrap para un personaje
    // personajeData: objeto con name, species, status e image
    function muestraCardPersonaje(personajeData) {
        const card = document.createElement('div');
        card.className = 'card col-md-4 mb-4';

        card.innerHTML = `
            <img src="${personajeData.image}" class="card-img-top" alt="${personajeData.name}">
            <div class="card-body">
                <h5 class="card-title">${personajeData.name}</h5>
                <p class="card-text">Especie: ${personajeData.species}</p>
                <p class="card-text">Estado: ${personajeData.status}</p>
            </div>
        `;

        return card;
    }

    // Renderiza una lista de personajes en tarjetas
    function displayCharacters(characters, { append = false } = {}) {
        if (!append) {
            charactersContainer.innerHTML = '';
        }

        const fragment = document.createDocumentFragment();

        characters.forEach(character => {
            const card = muestraCardPersonaje(character);
            fragment.appendChild(card);
        });

        charactersContainer.appendChild(fragment);
    }

    // Maneja la peticion al JSON y muestra todos los personajes
    function fetchCharacters() {
        if (isLoading) return;
        isLoading = true;
        btnMore.disabled = true;
        btnMore.textContent = 'Cargando...';

        pedirPaginaPersonajesRM(data => {
            displayCharacters(data.results, { append: false });
            btnMore.style.display = 'none'; // Ocultar boton ya que cargamos todo
        }).finally(() => {
            isLoading = false;
        });
    }

    // Cargar todos los personajes del JSON al inicio
    fetchCharacters();

    // Ya no necesitamos el boton "Show More" porque cargamos todo de una vez
    btnMore.style.display = 'none';
});