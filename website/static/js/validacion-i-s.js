/* const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const contraseña = document.getElementById('contraseña');
const errorEmail = document.getElementById('errorEmail');
const errorContraseña = document.getElementById('errorContraseña');

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let error = true;

    // Limpiar mensajes de error previos
    errorEmail.textContent = '';
    errorContraseña.textContent = '';

    // Validación del email
    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email.value)) {
        errorEmail.textContent = 'El email no es válido';
        error = false;
    }

    // Validación de la contraseña
    if (contraseña.value.length < 8) {
        errorContraseña.textContent = 'La contraseña debe tener al menos 8 caracteres';
        error = false;
    }


    if (error) {
        const formData = new FormData(formulario);
        fetch('/iniciar_sesion', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "/contenido";
            } else {
                errorContraseña.textContent = data.message; // 
            }
        })
        .catch(error => console.error('Error:', error));
    }
});



 */