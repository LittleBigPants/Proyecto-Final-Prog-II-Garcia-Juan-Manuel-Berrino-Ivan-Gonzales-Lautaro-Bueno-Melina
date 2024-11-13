document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');
    const closeSearchButton = document.querySelector('.cerrar-buscador'); // El botón de cerrar

    let debounceTimer;
    let lastScrollY = window.scrollY; // Variable para trackear la posición anterior del scroll

    // Cuando se hace clic en el icono de búsqueda
    searchIcon.addEventListener('click', function(event) {
        event.preventDefault();
        // Alternar la visibilidad del input de búsqueda
        if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
            searchContainer.style.display = 'block'; // Mostrar la barra de búsqueda
            searchContainer.style.opacity = '1';     // Hacer visible el fondo negro
            moviesContainer.classList.add('search-active'); // Añadir clase para dar espacio arriba
            searchInput.focus(); // Poner el foco en el input de búsqueda
        } else {
            // Limpiar el contenedor de películas cuando se cierra el buscador
            moviesContainer.innerHTML = '';  // Limpiar las películas visibles
            searchContainer.style.opacity = '0';    // Desvanecer el fondo negro
            setTimeout(() => {
                searchContainer.style.display = 'none'; // Ocultar el contenedor completamente después de la transición
                moviesContainer.style.zIndex = ''; // Restablecer el z-index de las películas cuando el buscador desaparezca
            }, 300); // Este tiempo debe coincidir con el tiempo de la transición de opacidad
            moviesContainer.classList.remove('search-active'); // Eliminar la clase para restaurar el espacio
        }
    });

    // Detectar el scroll y ocultar el input pero mantener el fondo negro
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        // Si el usuario hace scroll hacia abajo (scrollY > 0) y estaba en la parte superior, ocultamos el input
        if (currentScrollY > 0 && lastScrollY === 0) {
            searchInput.style.opacity = '0';  // Desvanecemos solo el input
            setTimeout(() => {
                searchInput.style.display = 'none';  // Lo ocultamos completamente después de la transición
            }, 300);
        }

        // Si el usuario hace scroll hacia arriba (currentScrollY < lastScrollY), mostramos el input
        if (currentScrollY < lastScrollY) {
            searchInput.style.opacity = '1';   // Mostramos el input
            searchInput.style.display = 'block'; // Aseguramos que el input esté visible
        }

        // Actualizamos la última posición del scroll
        lastScrollY = currentScrollY;
    });

    // Función para realizar la búsqueda de películas
    function searchMovies(query) {
        if (query.length < 1) {
            moviesContainer.innerHTML = ''; // Limpiar los resultados si la búsqueda está vacía
            return;
        }

        fetch(`/api/movies?q=${query}`)
            .then(response => response.json())
            .then(data => {
                displayMovies(data);  // Llamar a la función para mostrar las películas
            })
            .catch(error => console.error('Error fetching movies:', error));
    }

    // Función para mostrar las películas en el contenedor
    function displayMovies(movies) {
        // Limpiar el contenedor de películas
        moviesContainer.innerHTML = ''; // Limpiar los resultados previos

        // Si no hay resultados
        if (movies.length === 0) {
            moviesContainer.innerHTML = '<p>No se encontraron películas.</p>';
            return;
        }

        // Crear HTML para cada película
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie-card');  // Añadir clase para estilo

            movieElement.innerHTML = `
                <div class="movie-card">
                    <img src="${movie.image_url}" alt="${movie.title}" class="movie-image">
                    <h3 class="movie-title">${movie.title}</h3>
                </div>
            `;

            // Añadir la película al contenedor
            moviesContainer.appendChild(movieElement);
        });
    }

    // Event listener para detectar cambios en el campo de búsqueda (input en tiempo real)
    searchInput.addEventListener('input', function(event) {
        const query = searchInput.value.trim();

        // Limpiar el contenedor de películas si el campo está vacío
        if (query === '') {
            moviesContainer.innerHTML = '';  // Limpiar resultados
            return;  // Detener la ejecución si el campo está vacío
        }

        // Limitar la frecuencia de las solicitudes (debounce)
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            searchMovies(query);  // Realizar la búsqueda después de un pequeño retraso
        }, 500);  // 500 ms de retraso antes de realizar la búsqueda
    });

    // Cerrar el buscador cuando se hace clic en el botón de cerrar
    closeSearchButton.addEventListener('click', function() {
        // Limpiar las películas al cerrar el buscador
        moviesContainer.innerHTML = ''; // Limpiar el contenedor de películas
        searchContainer.style.opacity = '0';  // Desvanecer el fondo negro
        setTimeout(() => {
            searchContainer.style.display = 'none'; // Ocultar el contenedor completamente después de la transición
            moviesContainer.style.zIndex = ''; // Restablecer el z-index de las películas
        }, 300);
        moviesContainer.classList.remove('search-active'); // Restaurar el espacio cuando se cierra el buscador
    });
});