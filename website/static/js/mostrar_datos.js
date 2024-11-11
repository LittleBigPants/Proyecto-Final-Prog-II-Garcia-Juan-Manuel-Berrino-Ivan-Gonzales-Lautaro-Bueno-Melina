import { categories, movies, fetchCategories, fetchMovies } from "./api.js";

document.addEventListener("DOMContentLoaded", async() => {
    await fetchCategories();
    await fetchMovies();
	console.log("Categorías:", categories);
	console.log("Películas:", movies);
	displayCategories(categories);
    displayMovies(movies)
});

function displayCategories(categories) {
	const container = document.querySelector(".principales");
	container.innerHTML = ""; // Limpiar contenido existente

	categories.forEach((category) => {
		const categorieElement = document.createElement("div");
		categorieElement.classList.add("pelicula");
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
}

function displayMovies(movies) {
	movies.forEach((movie) => {
		const categoryCarousel = document.getElementById(
			`carousel-${movie.category}`
		);
		if (categoryCarousel) {
			const movieElement = document.createElement("div");
			movieElement.classList.add("pelicula");
			movieElement.innerHTML = `
                <a href="#"><img src="${movie.image_url}" alt="${movie.title}"></a>
            `;
			categoryCarousel.appendChild(movieElement);
		}
	});
}

displayCategories(categories, movies);
