let carrito = [];

function getCart() {
    return carrito;
}


function buy(){
    if (carrito.length === 0) {
        alert("No tienes productos en el carrito para comprar.");
        return;
    }
    carrito = [];

}

// Función para añadir una película al carrito
function addMovieToCart(movie) {
    // Verificamos si la película ya existe en el carrito
    const movieExists = carrito.some((existingMovie) => existingMovie.id === movie.id);
    if (!movieExists) {
        carrito.push(movie);  // Si no existe, la añadimos
    }
}

// Función para eliminar una película del carrito
function removeMovieFromCart(movieId) {
    // Buscamos el índice de la película en el carrito
    const movieIndex = carrito.findIndex((movie) => movie.id == movieId);
    if (movieIndex !== -1) {
        carrito.splice(movieIndex, 1);  // Eliminamos la película si se encuentra
    }
    console.log(carrito);
    
}

// Exportamos las funciones necesarias
export { getCart, addMovieToCart, removeMovieFromCart, buy };
