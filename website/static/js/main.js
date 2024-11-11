// main.js
import { inicializarData, categories, movies } from './api.js';
import { inicializarCarousel } from './carousel.js';
import { displayCategories, displayMovies } from './display.js';

document.addEventListener('DOMContentLoaded', async () => {
    showLoadingIndicator(); // Mostrar indicador de carga
    await inicializarData(); // Espera a que se carguen los datos

    hideLoadingIndicator(); // Ocultar indicador de carga
    displayCategories(categories);
    displayMovies(movies);
    inicializarCarousel();
});

function showLoadingIndicator() {
    const container = document.querySelector('.principales');
    container.innerHTML = '<p>Loading...</p>';
}

function hideLoadingIndicator() {
    const container = document.querySelector('.principales');
    container.innerHTML = '';
}
