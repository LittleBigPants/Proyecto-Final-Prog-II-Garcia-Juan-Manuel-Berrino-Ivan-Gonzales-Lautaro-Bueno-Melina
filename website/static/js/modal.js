// Selección de elementos del DOM
const moviePopup = document.getElementById("moviePopup");
const movieDescriptionContent = document.querySelector(".movie-description-content");
const closeModal = document.querySelector(".close");

// Función para mostrar la descripción de la película
function displayDescriptionMovie(movie) { 
    movieDescriptionContent.innerHTML = `
        <div class="movie-details">
            <h1>${movie.title}</h1> 
            <p>${movie.description}</p>
            <img src="${movie.image_url}" alt="${movie.title}" class="img-detail">
            <p>Fecha de estreno: <strong>${new Date(movie.release_date).toISOString().split('T')[0]}</strong></p>
            <p>Categoría: <strong>${movie.category}</strong></p>
            <p>Precio: <strong>${movie.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong></p>
            <p>Duración: <strong>${movie.duration} minutos</strong></p>
            <button id="${movie.id}" class="btn-añadir-carrito">Añadir al carrito</button>
        </div>
    `;

    // Mostrar el modal
    moviePopup.style.display = "block";

}

// Cerrar el modal al hacer clic en la 'x'
closeModal.onclick = function() {
    moviePopup.style.display = "none";
};

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == moviePopup) {
        moviePopup.style.display = "none";
    }
};

export { displayDescriptionMovie };
