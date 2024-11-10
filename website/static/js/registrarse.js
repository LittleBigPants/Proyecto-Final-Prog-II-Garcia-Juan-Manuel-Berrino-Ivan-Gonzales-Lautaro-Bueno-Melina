/* let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email'); // Campo de email
let contraseña = document.getElementById('contraseña');
let contraseña2 = document.getElementById('contraseña2');

let errorNombre = document.getElementById('errorNombre');
let errorApellido = document.getElementById('errorApellido');
let errorEmail = document.getElementById('errorEmail'); // Error de email
let errorContraseña = document.getElementById('errorContraseña');
let errorContraseña2 = document.getElementById('errorContraseña2');

// Expresiones regulares para validación
let validarNombre = /^[A-ZÀ-ÿ][A-Za-zÀ-ÿ\s'-]*$/;
let validarApellido = /^[A-Za-zÀ-ÿ\s'-]{2,}$/;
let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para el email
let validarPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

// Función para validar un campo
function validarCampo(input, regex, errorMsg) {
    if (!input.value) {
        errorMsg.textContent = 'Este campo es obligatorio';
        input.classList.add('input-error');
        return false;
    } else if (!regex.test(input.value)) {
        errorMsg.textContent = 'Ingrese un valor válido';
        input.classList.add('input-error');
        return false;
    } else {
        input.classList.remove('input-error');
        input.classList.add('input-success');
        errorMsg.textContent = ''; // Limpiar mensaje de error
        return true;
    }
}

nombre.addEventListener('input', () => validarCampo(nombre, validarNombre, errorNombre));
apellido.addEventListener('input', () => validarCampo(apellido, validarApellido, errorApellido));
email.addEventListener('input', () => validarCampo(email, validarEmail, errorEmail)); // Validación del email

contraseña.addEventListener('input', () => {
    if (!contraseña.value) {
        errorContraseña.textContent = 'La contraseña es obligatoria';
        contraseña.classList.add('input-error');
    } else if (contraseña.value.length < 8 || !validarPassword.test(contraseña.value)) {
        errorContraseña.textContent = 'La contraseña debe contener mínimo 8 caracteres, mayúsculas y números';
        contraseña.classList.add('input-error');
    } else {
        contraseña.classList.remove('input-error');
        contraseña.classList.add('input-success');
        errorContraseña.textContent = '';
    }
});

contraseña2.addEventListener('input', () => {
    if (contraseña.value !== contraseña2.value) {
        errorContraseña2.textContent = 'Las contraseñas no coinciden';
        contraseña2.classList.add('input-error');
    } else {
        contraseña2.classList.remove('input-error');
        contraseña2.classList.add('input-success');
        errorContraseña2.textContent = '';
    }
});

// Manejar el envío del formulario
formulario.addEventListener("submit", e => {
    e.preventDefault();
    let error = true;

    // Validar todos los campos antes de enviar
    let validNombre = validarCampo(nombre, validarNombre, errorNombre);
    let validApellido = validarCampo(apellido, validarApellido, errorApellido);
    let validEmail = validarCampo(email, validarEmail, errorEmail); // Validación del email
    

    // Validación de contraseña
    if (!contraseña.value || contraseña.value.length < 8 || !validarPassword.test(contraseña.value)) {
        errorContraseña.textContent = 'La contraseña debe contener mínimo 8 caracteres, mayúsculas y números';
        contraseña.classList.add('input-error');
        error = false;
    }

    // Validación de la repetición de la contraseña
    if (contraseña.value !== contraseña2.value) {
        errorContraseña2.textContent = 'Las contraseñas no coinciden';
        contraseña2.classList.add('input-error');
        error = false;
    }

    // Si no hay errores, enviar formulario
    if (error) {
        const formData = new FormData(formulario);
        fetch('/registrarse', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "/"; // Redirigir al inicio
            } else {
                errorContraseña2.textContent = data.message;  // Mensaje de error desde el servidor
            }
        })
        .catch(error => console.error('Error:', error));
    }
}); */