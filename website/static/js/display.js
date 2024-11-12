function displayCategories(categories) {
    const container = document.querySelector('.principales');
    container.innerHTML = ''; 
    const categoriesSelection = document.querySelector('.container');
    categoriesSelection.innerHTML = ''; 

    categories.forEach(category => {
        const categorieElement = document.createElement('div');
        categorieElement.classList.add('peliculas-tipo');
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
        categoriesButton.innerHTML = `<h3>${category.name}</h3>`
        
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





export {displayMovies, displayCategories};