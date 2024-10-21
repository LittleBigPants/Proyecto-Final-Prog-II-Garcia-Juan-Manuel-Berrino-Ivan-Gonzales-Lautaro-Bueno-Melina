let password = document.getElementById("password");
let btn = document.getElementById("btn-registro");
let age = document.getElementById("age");
let password2 = document.getElementById("confirm-password");
let errorContraseña = document.getElementById("errorContraseña");
let errorContraseña2 = document.getElementById("errorContraseña2");
let errorAge = document.getElementById("errorAge");
let emailInput = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");



btn.addEventListener("click", () => {
	confirmPassword();
    corfirmAge();
});

function confirmPassword() {
	const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

	if (!passwordPattern.test(password)) {
        errorContraseña.textContent = "La contraseña debe tener entre 8 y 20 caracteres, una letra mayuscula y un numero";
	}

    if (password.value !== password2.value) {
        errorContraseña2.textContent = "Las contraseñas deben coincidir";
    }

}




function corfirmAge() {
	const fechaNacimiento = new Date(age.value);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    const dia = fechaActual.getDate() - fechaNacimiento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    }

    if (edad <= 18) {
        errorAge.textContent =  "El usuario es menor de 18 años.";
    }
} 
