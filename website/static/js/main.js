import { inicializarData, categories, movies } from "./api.js";
import { inicializarCarousel } from "./carousel.js";
import {
	displayCategories,
	displayMovies,
	displayDescriptionMovie,
	displayCart,
	displayPerfil,
} from "./display.js";
import { renderCart } from "./render-cart.js";
import { addMovieToCart, getCart } from "./cart.js";
import { searchBar } from "./busqueda-pelicula.js";

/* Optimizar todo el codigo de aca, se repite en varias ocaciones */

document.addEventListener("DOMContentLoaded", async () => {
	await inicializarData(); // Esperamos a que se carguen los datos

	displayCategories(categories);
	displayMovies(movies);
	displayCart();
	displayPerfil();
	inicializarCarousel();

	const flechasDerechas = document.querySelectorAll(".flecha-derecha");
	const flechasIzquierdas = document.querySelectorAll(".flecha-izquierda");
	const exitSearch = document.querySelector(".cerrar-buscador");
	const searchInput = document.querySelector("#search-icon");

	searchInput.addEventListener("click", () => {
		flechasDerechas.forEach((e) => {
			e.style.visibility = "hidden";
		});
		flechasIzquierdas.forEach((e) => {
			e.style.visibility = "hidden";
		});
	});

	exitSearch.addEventListener("click", () => {
		flechasDerechas.forEach((e) => {
			e.style.visibility = "visible";
		});
		flechasIzquierdas.forEach((e) => {
			e.style.visibility = "visible";
		});
	});

	const moviePopup = document.getElementById("moviePopup");
	const movieDescriptionContent = document.querySelector(
		".movie-description-content"
	);
	const closeModal = document.querySelector(".close");

	let imgButton = document.querySelectorAll(".img-button");
	imgButton.forEach((img) => {
		img.addEventListener("click", (e) => {
			if (e.currentTarget.id) {
				const choosenMovie = movies.find(
					(movie) => movie.id == e.currentTarget.id
				);
				displayDescriptionMovie(choosenMovie, movieDescriptionContent);

				let btnAñadirCarrito = document.querySelectorAll(".btn-añadir-carrito");
				btnAñadirCarrito.forEach((btn) => {
					btn.addEventListener("click", (e) => {
						if (e.currentTarget.id) {
							const choosenMovie = movies.find(
								(movie) => movie.id == e.currentTarget.id
							);
							addMovieToCart(choosenMovie);
							renderCart();
						}
					});
				});
			}
		});
	});

	closeModal.onclick = function () {
		moviePopup.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == moviePopup) {
			moviePopup.style.display = "none";
		}
	};

	function callback(movies) {
		console.log(movies);
		let movieCard = document.querySelectorAll(".movie-image");
		const moviesContainer = document.getElementById("movies-container");
        const searchContainer = document.getElementById('search-container');
		console.log(movieCard);
		movieCard.forEach((img) => {
			img.addEventListener("click", (e) => {
				searchContainer.style.opacity = "0";
				setTimeout(() => (searchContainer.style.display = "none"), 300);
				moviesContainer.innerHTML = "";
				moviesContainer.classList.remove("search-active");
				if (e.currentTarget.id) {
					const choosenMovie = movies.find(
						(movie) => movie.id == e.currentTarget.id
					);
					displayDescriptionMovie(choosenMovie, movieDescriptionContent);

					let btnAñadirCarrito = document.querySelectorAll(
						".btn-añadir-carrito"
					);
					btnAñadirCarrito.forEach((btn) => {
						btn.addEventListener("click", (e) => {
							if (e.currentTarget.id) {
								const choosenMovie = movies.find(
									(movie) => movie.id == e.currentTarget.id
								);
								addMovieToCart(choosenMovie);
								renderCart();
							}
						});
					});
				}
			});
		});
	}

	searchBar(callback);
});
