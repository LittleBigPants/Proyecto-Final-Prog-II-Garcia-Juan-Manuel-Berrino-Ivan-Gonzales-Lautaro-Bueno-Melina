function inicializarCarousel() {
    const seccionesPrincipales = document.querySelectorAll('.peliculas-tipo');

    seccionesPrincipales.forEach((seccion) => {
        const fila = seccion.querySelector('.contenedor-carousel');
        const peliculas = seccion.querySelectorAll('.pelicula');
        const flechaIzquierda = seccion.querySelector('.flecha-izquierda');
        const flechaDerecha = seccion.querySelector('.flecha-derecha');

        // Event Listener para las flechas derechas.
        flechaDerecha.addEventListener('click', () => {
            fila.scrollLeft += fila.offsetWidth;

            const indicadorActivo = seccion.querySelector('.indicadores .activo');
            if (indicadorActivo && indicadorActivo.nextSibling) {
                indicadorActivo.nextSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
        });

        // Event Listener para las flechas izquierdas.
        flechaIzquierda.addEventListener('click', () => {
            fila.scrollLeft -= fila.offsetWidth;

            const indicadorActivo = seccion.querySelector('.indicadores .activo');
            if (indicadorActivo && indicadorActivo.previousSibling) {
                indicadorActivo.previousSibling.classList.add('activo');
                indicadorActivo.classList.remove('activo');
            }
        });

        // Paginación
        const numeroPaginas = Math.ceil(peliculas.length / 5);
        for (let i = 0; i < numeroPaginas; i++) {
            const indicador = document.createElement('button');

            if (i === 0) {
                indicador.classList.add('activo');
            }

            seccion.querySelector('.indicadores').appendChild(indicador);
            indicador.addEventListener('click', (e) => {
                fila.scrollLeft = i * fila.offsetWidth;

                seccion.querySelector('.indicadores .activo').classList.remove('activo');
                e.target.classList.add('activo');
            });
        }

        // Hover effect
        peliculas.forEach((pelicula) => {
            pelicula.addEventListener('mouseenter', (e) => {
                const elemento = e.currentTarget;
                setTimeout(() => {
                    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                    elemento.classList.add('hover');
                }, 300);
            });
        });

        fila.addEventListener('mouseleave', () => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
        });
    });
}

export {inicializarCarousel};