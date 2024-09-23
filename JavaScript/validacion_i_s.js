const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const contraseña = document.getElementById('contraseña');
const errorEmail = document.getElementById('errorEmail');
const errorContraseña = document.getElementById('errorContraseña');

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let error = false;

    errorEmail.textContent = '';
    errorContraseña.textContent = '';

    // Validación del email
    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validarPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    if (!validEmail.test(email.value)) {
        errorEmail.textContent = 'El email no es válido';
        error = true;
    }

    // Validación de la contraseña
    if (contraseña.value.length < 8) {
        errorContraseña.textContent = 'Contraseña incorrecta';
        error = true;
    } else if(!validarPassword.test(contraseña.value)){
        errorContraseña.textContent = 'Contraseña incorrecta';
        error = true;
    }

    if(!error){
        window.location.href = "contenido.html"
    }
}
);


