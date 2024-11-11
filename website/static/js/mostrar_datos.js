async function fetchCategoriesAndMovies() {
    try {
        const response = await fetch('/api/categories');
        const response2 = await fetch('/api/movies');
        if (!response.ok || !response2.ok) {
            throw new Error('Network response was not ok');
        }
        const categories = await response.json();
        const movies = await response2.json();
        displayCategories(categories, movies);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


function displayCategories(categories, movies) {
    const container = document.querySelector('.principales');
    container.innerHTML = ''; // Limpiar contenido existente

    categories.forEach(category => {
        const categorieElement = document.createElement('div');
        categorieElement.classList.add('pelicula');
        categorieElement.innerHTML = `
            <div class="peliculas-tipo">
                <div class="contenedor-titulo-controles">
                <h4>${category.name}</h4>
				<div class="indicadores"></div>
			</div>

			<div class="contenedor-principal">
				<button role="button" id="flecha-izquierda" class="flecha-izquierda"><i class="fas fa-angle-left"></i></button>
				<div class="contenedor-carousel">
					<div class="carousel" id="carousel-${category.name}">
                    </div>
                    <button role="button" id="flecha-derecha" class="flecha-derecha"><i class="fas fa-angle-right"></i></button>
				</div>
        `;
        container.appendChild(categorieElement);
        
    });
    displayMovies(movies);
}


function displayMovies(movies) {
    movies.forEach(movie => {
        console.log(movie.category);
        const categoryCarousel = document.getElementById(`carousel-${movie.category}`);
        if (categoryCarousel) {
            const movieElement = document.createElement('div');
            movieElement.classList.add('pelicula');
            movieElement.innerHTML = `
                <a href="#"><img src="${movie.image_url}" alt="${movie.title}"></a>
            `;
            categoryCarousel.appendChild(movieElement);
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchCategoriesAndMovies);
