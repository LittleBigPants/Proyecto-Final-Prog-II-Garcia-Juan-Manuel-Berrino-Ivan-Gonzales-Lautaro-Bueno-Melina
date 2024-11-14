function displayCategories(categories) {
    const container = document.querySelector('.principales');
    container.innerHTML = ''; 
    const categoriesSelection = document.querySelector('.container');
    categoriesSelection.innerHTML = ''; 

    categories.forEach(category => {
        const categorieElement = document.createElement('div');
        categorieElement.classList.add('peliculas-tipo');
        categorieElement.id = `section-${category.name}`; 
        categorieElement.innerHTML = `
            <div class="contenedor-titulo-controles">
                <h4>${category.name}</h4>
                <div class="indicadores"></div>
            </div>
            <div class="contenedor-principal">
                <button role="button" class="flecha-izquierda"><i class="fas fa-angle-left"></i></button>
                <div class="contenedor-carousel" id="carousel-${category.name}">
                    <div class="carousel">
                        <!-- Películas se insertarán aquí -->
                    </div>
                </div>
                <button role="button" class="flecha-derecha"><i class="fas fa-angle-right"></i></button>
            </div>
        `;
        container.appendChild(categorieElement);

        const categoriesButton = document.createElement('div');
        categoriesButton.classList.add('clases-categorias');
        categoriesButton.setAttribute('data-target', `#section-${category.name}`);
        categoriesButton.innerHTML = `<h3>${category.name}</h3>`; 

        // Evento de clic en todo el div de la categoría
        categoriesButton.addEventListener('click', event => {
            event.preventDefault();
            const href = categoriesButton.getAttribute('data-target');
            const offset = 100; 
            const target = document.querySelector(href);
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        });

        categoriesSelection.appendChild(categoriesButton);
    });
}

function displayMovies(movies) {
    movies.forEach(movie => {
        const categoryCarousel = document.querySelector(`#carousel-${movie.category} .carousel`);
        if (categoryCarousel) {
            const movieElement = document.createElement('div');
            movieElement.classList.add('pelicula');
            movieElement.innerHTML = `
                <img src="${movie.image_url}" alt="${movie.title}" class="img-button" id="${movie.id}">
            `;
            categoryCarousel.appendChild(movieElement);
        }
    });
}

function displayDescriptionMovie(movie, conteiner) {
    conteiner.innerHTML = `
        <div class="movie-details">
            <h1>${movie.title}</h1> 
            <p>${movie.description}</p>
            <img src="${movie.image_url}" alt="${movie.title}" class="img-detail">
            <p>Fecha de estreno: <strong>${new Date(movie.release_date).toISOString().split("T")[0]}</strong></p>
            <p>Categoría: <strong>${movie.category}</strong></p>
            <p>Precio: <strong>${movie.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</strong></p>
            <p>Duración: <strong>${movie.duration} minutos</strong></p>
            <button id=${movie.id} class="btn-añadir-carrito">Añadir al carrito</button>
        </div>
    `;

    // Mostrar el modal
    moviePopup.style.display = "block";
}



export { displayMovies, displayCategories, displayDescriptionMovie };