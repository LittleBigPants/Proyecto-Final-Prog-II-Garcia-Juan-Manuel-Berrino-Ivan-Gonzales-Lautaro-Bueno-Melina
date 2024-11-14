import { movies, inicializarData } from "./api.js"; 

async function searchBar(callback) {
    await inicializarData();
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');
    const closeSearchButton = document.querySelector('.cerrar-buscador'); // El botón de cerrar

    let debounceTimer;

    searchIcon.addEventListener('click', function(event) {
        event.preventDefault();
        const isVisible = searchContainer.style.display === 'block';

        searchContainer.style.display = isVisible ? 'none' : 'block';
        searchContainer.style.opacity = isVisible ? '0' : '1';
        moviesContainer.classList.toggle('search-active', !isVisible);

        if (!isVisible) searchInput.focus();
        else moviesContainer.innerHTML = ''; // Limpiar películas si se cierra
    });

    // Detectar el scroll y ocultar el input, manteniendo el fondo negro
    window.addEventListener('scroll', function() {
        const shouldHide = window.scrollY > 0;
        searchInput.style.opacity = shouldHide ? '0' : '1';
        searchInput.style.display = shouldHide ? 'none' : 'block';
    });

    // Función para realizar la búsqueda de películas
    function searchMovies(query) {
        if (!query) {
            moviesContainer.innerHTML = '';
            return;
        }

        // Filtrar las películas que coincidan con el query
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase())
        );

        displayMovies(filteredMovies);
    }

    function displayMovies(filteredMovies) {
        moviesContainer.innerHTML = filteredMovies.length ? 
            filteredMovies.map(movie => `
                <div class="movie-card">
                    <img src="${movie.image_url}" alt="${movie.title}" class="movie-image" id="${movie.id}">
                    <h3 class="movie-title">${movie.title}</h3>
                </div>
            `).join('') : '<p>No se encontraron resultados</p>';

        callback(filteredMovies);
    }

    // Detectar cambios en el input y ejecutar la búsqueda (con debounce)
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => searchMovies(query), 500);
    });

    // Cerrar el buscador cuando se hace clic en el botón de cerrar
    closeSearchButton.addEventListener('click', function() {
        searchContainer.style.opacity = '0';
        setTimeout(() => searchContainer.style.display = 'none', 300); // Esperar la transición
        moviesContainer.innerHTML = ''; // Limpiar películas
        moviesContainer.classList.remove('search-active');
    });
};

export { searchBar };
