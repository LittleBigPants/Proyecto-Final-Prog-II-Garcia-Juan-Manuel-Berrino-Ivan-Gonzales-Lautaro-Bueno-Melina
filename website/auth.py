from flask import Flask,Blueprint, render_template, url_for, request, flash, redirect
from flask_login import login_user, login_required, logout_user, current_user
from .models import User
from website import db  # Importamos db desde el paquete 'website'
from werkzeug.security import generate_password_hash, check_password_hash
from wtforms import Form, StringField, PasswordField
from wtforms.validators import DataRequired, Length, Email, EqualTo, Regexp

auth = Blueprint('auth', __name__)

class SignUpForm(Form):
    first_name = StringField('Nombre', validators=[DataRequired(message='El nombre es obligatorio.'), 
                                                Length(min=3, message='El nombre debe contener mínimo 3 caracteres.'),  
                                                Regexp('^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$', message='El nombre solo debe contener letras.')])
    
    last_name = StringField('Apellido', validators=[DataRequired(message='El apellido es obligatorio.'), 
                                                    Length(min=3, message='El apellido debe contener minimo 3 caracteres.'),
                                                    Regexp('^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$', message='El apellido solo debe contener letras.')])
                                                    
                                                    
    email = StringField('Correo electrónico', validators=[DataRequired(message='El correo electrónico es obligatorio.'), 
                                                        Email(message='Ingrese un correo electrónico.')])
    
    
    password1 = PasswordField('Contraseña', validators=[DataRequired(message='La contraseña es obligatoria.'), 
                                                        Length(min=8, message='La contraseña debe contener mínimo 8 caracteres.'),
                                                        Regexp('^(?=.*[A-Z])(?=.*\d).{8,}$', message='La contraseña  debe contener al menos una mayúsucla y un número.')])
    
    
    password2 = PasswordField('Confirmar Contraseña', validators=[DataRequired(message='Confirme la contraseña.'), 
                                                                EqualTo('password1', message='Las contraseñas no coinciden')])


@auth.route('/iniciar_sesion', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        if not email or not password:
            flash('Por favor, complete ambos campos.', category='general_error')
            return render_template("iniciar-sesion.html")

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember=True)
                return redirect(url_for('views.content'))
            else:
                flash('Contraseña incorrecta. Intente de nuevo.', category='password_error')
        else:
            flash('El email no existe.', category='email_error')
    return render_template("iniciar-sesion.html")

@auth.route('/cerrar_sesion')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))

@auth.route('/registrarse', methods=['GET', 'POST'])
def sign_up():
    form = SignUpForm(request.form)

    if request.method == 'POST' and form.validate():
        # Obtener los datos del formulario
        first_name = form.first_name.data.strip().capitalize()
        last_name = form.last_name.data.strip().capitalize()
        email = form.email.data
        password1 = form.password1.data

        # Validar si el email ya existe
        user = User.query.filter_by(email=email).first()

        if user:
            flash('El email ya existe.', category='email_error')
            return render_template('registrarse.html', form=form)
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

            return redirect(url_for('views.home'))

    return render_template('registrarse.html', form=form)


@auth.route('/eliminar_cuenta' , methods=['GET','POST'])
@login_required
def delete_account():
    if request.method == 'POST':
        user = current_user
        
        if user:
            db.session.delete(user)
            db.session.commit()
    
            logout_user()
    
        return redirect(url_for('auth.login'))
    return render_template('eliminar_cuenta.html')
    
