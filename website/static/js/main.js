import { inicializarData, categories, movies } from "./api.js";
import { inicializarCarousel } from "./carousel.js";
import { displayCategories, displayMovies } from "./display.js";
import { renderCart } from "./render-cart.js";  // Importamos la función renderCart
import { addMovieToCart } from "./cart.js";  // Importamos la función addMovieToCart

document.addEventListener("DOMContentLoaded", async () => {
    await inicializarData();  // Esperamos a que se carguen los datos

    displayCategories(categories);
    displayMovies(movies);
    inicializarCarousel();

    const moviePopup = document.getElementById("moviePopup");
    const movieDescriptionContent = document.querySelector(".movie-description-content");
    const closeModal = document.querySelector(".close");

    let imgButton = document.querySelectorAll(".img-button");
    imgButton.forEach((img) => {
        img.addEventListener("click", (e) => {
            if (e.currentTarget.id) {
                const choosenMovie = movies.find((movie) => movie.id == e.currentTarget.id);
                displayDescriptionMovie(choosenMovie);
            }
        });
    });

    function displayDescriptionMovie(movie) {
        movieDescriptionContent.innerHTML = `
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

        let btnAñadirCarrito = document.querySelectorAll(".btn-añadir-carrito");
        btnAñadirCarrito.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                if (e.currentTarget.id) {
                    const choosenMovie = movies.find((movie) => movie.id == e.currentTarget.id);
                    addMovieToCart(choosenMovie);  // Añadimos la película al carrito
                    renderCart();  // Volvemos a renderizar el carrito después de añadir la película
                }
            });
        });
    }

    // Cerrar el modal al hacer clic en la 'x'
    closeModal.onclick = function () {
        moviePopup.style.display = "none";
    };

    // Cerrar el modal al hacer clic fuera del contenido
    window.onclick = function (event) {
        if (event.target == moviePopup) {
            moviePopup.style.display = "none";
        }
    };

    // Inicializamos la vista del carrito
    renderCart();
});
