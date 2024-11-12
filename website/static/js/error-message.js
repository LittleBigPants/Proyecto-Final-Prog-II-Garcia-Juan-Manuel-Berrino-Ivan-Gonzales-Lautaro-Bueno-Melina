document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        // Elimina los mensajes de error cuando el usuario empieza a escribir
        const errorMessages = this.parentElement.querySelectorAll('.text-danger');
        errorMessages.forEach(error => error.remove());
    });
});