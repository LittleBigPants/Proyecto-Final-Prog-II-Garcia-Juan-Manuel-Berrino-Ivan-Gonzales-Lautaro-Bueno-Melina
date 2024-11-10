from flask import Blueprint, render_template, url_for, request, flash, redirect
from flask_login import login_user, login_required, logout_user, current_user
from .models import User
from website import db  # Importamos db desde el paquete 'website'
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/iniciar_sesion', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if not email or not password:
            flash('Por favor, complete ambos campos.', category='error')
            return render_template("iniciar-sesion.html")

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember=True)
                return redirect(url_for('auth.content'))
            else:
                flash('Contraseña incorrecta. Intente de nuevo.', category='error')
        else:
            flash('El email no existe.', category='error')
    return render_template("iniciar-sesion.html")

@auth.route('/cerrar_sesion')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/registrarse', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        first_name = request.form.get('firstName')
        last_name = request.form.get('lastName')
        email = request.form.get('email')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        # Validar si el email ya existe
        user = User.query.filter_by(email=email).first()

        if user:
            flash('El email ya existe.', category='error')
            print("Email ya existe")
        elif password1 != password2:
            flash('Las contraseñas no coinciden', category='error')
            print("Las contraseñas no coinciden")
        else:
            # Crear nuevo usuario
            new_user = User(
                first_name=first_name,
                last_name=last_name,
                email=email,
                password=generate_password_hash(password1, method='pbkdf2:sha256')
            )
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            print(f"Usuario logueado: {current_user.id}") 

            flash('Cuenta creada exitosamente.', category='success')
            print("Redirigiendo a la página de inicio...")
            return redirect(url_for('views.home'))

    return render_template("registrarse.html")

@auth.route('/contenido')
@login_required
def content():
    return render_template("contenido.html")

@auth.route('/peliculas')
def movies():
    return render_template("comprar_pelicula.html")

@auth.route('/suscripcion') 
def suscripcion(): 
    return render_template("suscripcion.html")
