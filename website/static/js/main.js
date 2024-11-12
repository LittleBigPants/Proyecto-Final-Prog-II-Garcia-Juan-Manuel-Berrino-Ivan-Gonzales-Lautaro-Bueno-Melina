import { inicializarData, categories, movies } from './api.js';
import { inicializarCarousel } from './carousel.js';
import { displayCategories, displayMovies } from './display.js';

document.addEventListener('DOMContentLoaded', async () => {
    await inicializarData(); // Espera a que se carguen los datos

    displayCategories(categories);
    displayMovies(movies);
    inicializarCarousel();




const movieDescription = document.querySelector(".movie-description");
let imgButton = document.querySelectorAll(".img-button");

imgButton.forEach(img => {
    img.addEventListener("click", (e) => {
        console.log('este es un evento');
        movieDescription.innerHTML = "";
        if (e.currentTarget.id) {
            const choosenMovie = movies.filter(movie => movie.id == e.currentTarget.id);
            displayDescriptionMovie(choosenMovie[0]);
        }
    });
});

function displayDescriptionMovie(movie) { 
    const movieInfoContainer = document.createElement("div");
    movieInfoContainer.setAttribute("id", "movie-info");
    movieInfoContainer.innerHTML = `
        <div class="movie-details">
            <h1>${movie.title}</h1> 
            <p>${movie.description}</p>
            <img src="${movie.image_url}" alt="${movie.title}" class="img-detail">
            <p>Fecha de estreno: <strong>${new Date(movie.release_date).toISOString().split('T')[0]}</strong></p>
            <p>Categoría: <strong>${movie.category}</strong></p>
            <p>Precio: <strong>${movie.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong></p>
            <p>Duración: <strong>${movie.duration} minutos</strong></p>
            <button><a href="#">Reproducir</a></button>
        </div>
    `;

    movieDescription.appendChild(movieInfoContainer);
}
});




