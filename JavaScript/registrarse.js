let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let fecha = document.getElementById('fecha');
let movil = document.getElementById('movil');
let contraseña = document.getElementById('contraseña');
let contraseña2 = document.getElementById('contraseña2');


let errorNombre = document.getElementById('errorNombre');
let errorApellido = document.getElementById('errorApellido');
let errorFecha = document.getElementById('errorFecha');
let errorMovil = document.getElementById('errorMovil');
let errorContraseña = document.getElementById('errorContraseña');
let errorContraseña2 = document.getElementById('errorContraseña2');

formulario.addEventListener("submit", e =>{
    e.preventDefault();
    let error = true;

    let validarNombre =  /^[A-Za-zÀ-ÿ\s'-]+$/;
    let validarApellido =  /^[A-Za-zÀ-ÿ\s'-]{2,}$/;
    let validarMovil = /^\+?\d{1,3}?[-.\s]?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{3})$/;
    let validarPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    let validarPassword2 = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    errorNombre.textContent = '';
    errorApellido.textContent = '';
    errorFecha.textContent = '';
    errorMovil.textContent = '';
    errorContraseña.textContent = '';
    errorContraseña2.textContent = '';

    if(!formulario.nombre.value){
        errorNombre.textContent = 'El nombre es obligatorio'
        error = false;
    } else if(!validarNombre.test(nombre.value)){
        errorNombre.textContent = 'Ingrese un nombre válido'
        error = false;
    }

    if(!formulario.apellido.value){
        errorApellido.textContent = 'El apellido es obligatorio'
        error = false;
    }else if(!validarApellido.test(apellido.value)){
        errorApellido.textContent = 'Ingrese un apellido válido'
        error = false;
    }

    if (!formulario.fecha.value) {
        errorFecha.textContent = 'La fecha de nacimiento es obligatoria';
        error = false; 
    } else {
        let fechaNacimiento = new Date(formulario.fecha.value);
        let edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
        let mesActual = new Date().getMonth();
        let mesNacimiento = fechaNacimiento.getMonth();
    
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && new Date().getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
    
        if (edad < 18) {
            errorFecha.textContent = 'La edad tiene que ser mayor a 18';
            error = false; 
        }
    }

    if (!formulario.movil.value) {
        errorMovil.textContent = 'El numero de telefono es obligatorio';
        error = false; 
    } else if(!validarMovil.test(formulario.movil.value)){
        errorMovil.textContent = 'Ingrese un número de móvil válido';
        error = false;
    }


    if (!formulario.contraseña.value) {
        errorContraseña.textContent = 'La contraseña es obligatoria';
        error = false; 
    }
    if (formulario.contraseña.value.length < 8) {
        errorContraseña.textContent = 'La contraseña debe contener minimo 8 caracteres,mayúsculas y numeros';
        error = false;
    } else if(!validarPassword.test(contraseña.value)){
        errorContraseña.textContent = 'Debe contener mayúsculas y numeros';
        error = false;
    }

    if(!formulario.contraseña2.value){
        errorContraseña2.textContent = 'La contraseña es obligatoria';
        error = false; 
    }
   if(formulario.contraseña.value !== formulario.contraseña2.value){
    errorContraseña2.textContent = 'La contraseña debe coincidir';
    error = false;
   }


   if(error){
    window.location.href = "bienvenido.html"
   }
})