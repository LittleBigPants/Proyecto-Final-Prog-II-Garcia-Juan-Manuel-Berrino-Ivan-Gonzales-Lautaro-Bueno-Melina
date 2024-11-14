import { inicializarData, categories, movies } from "./api.js";
import { inicializarCarousel } from "./carousel.js";
import { displayCategories, displayMovies, displayDescriptionMovie } from "./display.js";
import { renderCart } from "./render-cart.js";  // Importamos la función renderCart
import { addMovieToCart, getCart } from "./cart.js";  // Importamos la función addMovieToCart

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
                displayDescriptionMovie(choosenMovie, movieDescriptionContent);

                let btnAñadirCarrito = document.querySelectorAll(".btn-añadir-carrito");
                btnAñadirCarrito.forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        if (e.currentTarget.id) {
                            const choosenMovie = movies.find((movie) => movie.id == e.currentTarget.id);
                            addMovieToCart(choosenMovie);
                            renderCart();
                        }
                    });
                });
            }
        });
    });


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


 

});


