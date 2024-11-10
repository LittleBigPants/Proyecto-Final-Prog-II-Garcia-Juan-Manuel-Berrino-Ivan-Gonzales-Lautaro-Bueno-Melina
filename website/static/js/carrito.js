document.addEventListener("DOMContentLoaded", function() {
    const contenedorCarrito = document.getElementById("contenedor_carrito");
    const menuCarrito = document.getElementById("menu_carrito");
    const cerrarCarrito = document.querySelector(".cerrar_carrito"); // Selecciona el ícono de cerrar

    contenedorCarrito.addEventListener("click", function() {
        // Alternar la visibilidad del menú
        if (menuCarrito.style.display === "none" || menuCarrito.style.display === "") {
            menuCarrito.style.display = "block"; // Muestra el menú
            setTimeout(() => {
                menuCarrito.style.right = "0"; // Mueve el menú a la vista
            }, 10); // Retraso para permitir que el display:block tenga efecto
        } else {
            closeMenu();
        }
    });

    // Evento para cerrar el menú al hacer clic en el ícono de cerrar
    cerrarCarrito.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
        closeMenu(); // Llama a la función para cerrar el menú
    });

    function closeMenu() {
        menuCarrito.style.right = "-100%"; // Mueve el menú fuera de la vista
        setTimeout(() => {
            menuCarrito.style.display = "none"; // Oculta el menú después de la animación
        }, 300); // Debe coincidir con la duración de la transición
    }
});