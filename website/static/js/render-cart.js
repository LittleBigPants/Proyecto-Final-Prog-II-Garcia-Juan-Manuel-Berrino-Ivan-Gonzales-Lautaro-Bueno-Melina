import { getCart, removeMovieFromCart, buy } from './cart.js';  // Importamos las funciones del carrito

function renderCart() {
    const carrito = getCart();  // Obtenemos el carrito actualizado
    let carritoItem = document.querySelector(".carrito_items");
    carritoItem.innerHTML = "";  // Limpiamos el carrito actual en el HTML

    // Iteramos sobre cada película en el carrito para renderizarla
    carrito.forEach((movie) => {
        carritoItem.innerHTML += `
            <div class="carrito_item">
                <img src="${movie.image_url}" alt="Película ${movie.title}" width="60px">
                <div class="carrito_item_detalles">
                    <span class="carrito_item_titulo">${movie.title}</span>
                    <span class="carrito_item_precio">$${movie.price}</span>
                </div>
                <span class="btn_eliminar" id=${movie.id}>
                    <i class="fa-solid fa-trash"></i>
                </span>
            </div>`;
    });

    // Mostrar el total del carrito
    const totalElement = document.querySelector(".carrito_precio_final");
    const total = carrito.reduce((acc, movie) => acc + movie.price, 0);  // Calculamos el total
    if (totalElement) {
        totalElement.textContent = `Total: $${total.toFixed(2)}`;  // Mostramos el total
    }

    // Añadimos el evento de eliminar a cada botón de eliminar
    const btnEliminar = document.querySelectorAll(".btn_eliminar");
    btnEliminar.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const movieId = e.currentTarget.id;  // Obtenemos el ID de la película
            removeMovieFromCart(movieId);  // Eliminamos la película del carrito
            renderCart();  // Volvemos a renderizarel carrito después de la eliminación
        });
    });


    let carritoCounter = document.querySelector(".carrito-counter");
    console.log(carrito.length);
    carritoCounter.innerHTML=`${carrito.length}` ;
}

let pagar = document.querySelector(".btn_pagar");
let check = document.querySelector(".check");
check.innerHTML = "";
pagar.addEventListener("click", () => {
    console.log("evento");
    buy();
    renderCart();
    check.innerHTML='Gracias por su compra!!'
}) 

export { renderCart };
