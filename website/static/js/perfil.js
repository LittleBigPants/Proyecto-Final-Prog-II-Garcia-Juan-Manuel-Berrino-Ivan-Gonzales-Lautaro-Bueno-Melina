document.addEventListener("DOMContentLoaded", function() {
    const contenedorPerfil = document.getElementById("contenedor-perfil");
    const menuPerfil = document.getElementById("menu-perfil");
    const cerrarPerfil = document.querySelector(".cerrar"); // Selecciona el ícono de cerrar
    contenedorPerfil.addEventListener("click", function() {
        // Alternar la visibilidad del menú
        if (menuPerfil.style.display === "none" || menuPerfil.style.display === "") {
            menuPerfil.style.display = "block"; // Muestra el menú
            setTimeout(() => {
                menuPerfil.style.right = "0"; // Mueve el menú a la vista
            }, 10); // Retraso para permitir que el display:block tenga efecto
        } else {
            closeMenu();
        }
    });
    // Evento para cerrar el menú al hacer clic en el ícono de cerrar
    cerrarPerfil.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
        closeMenu(); // Llama a la función para cerrar el menú
    });
    function closeMenu() {
        menuPerfil.style.right = "-100%"; // Mueve el menú fuera de la vista
        setTimeout(() => {
            menuPerfil.style.display = "none"; // Oculta el menú después de la animación
        }, 300); // Debe coincidir con la duración de la transición
    }
});