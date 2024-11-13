from flask import Blueprint, render_template, url_for, request, redirect, flash, current_app, jsonify
from website import db 
from flask_login import  login_required, current_user
from werkzeug.utils import secure_filename
import os
from .models import Movie, Category


views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("bienvenido.html")


@views.route('/contenido')
@login_required
def content():
    return render_template("contenido.html", user=current_user)




@views.route('/api/movies', methods=['GET'])
def get_movies():
    # Obtener el término de búsqueda si se proporciona
    search_query = request.args.get('q', '')  # Si no se pasa, el valor por defecto es una cadena vacía

    # Filtrar películas si hay una búsqueda
    if search_query:
        movies = Movie.query.filter(Movie.title.ilike(f'%{search_query}%')).all()
    else:
        movies = Movie.query.all()

    # Preparar el resultado para devolver
    result = [{'id': m.id, 'title': m.title, 'description': m.description, 'release_date': m.release_date,
               'category': m.category.name, 'image_url': m.image_url, 'price': m.price, 'duration': m.duration,
               'video_url': m.video_url, 'download_url': m.download_url} for m in movies]
    
    return jsonify(result)

# Nueva ruta para obtener todas las categorías
@views.route('/api/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    result = [{'id': c.id, 'name': c.name, 'description': c.description} for c in categories]
    return jsonify(result) 

""" @views.route('watch/movie/<int:movie_id>')
def movie_detail(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    return render_template('movie_view.html', movie=movie) """



@views.route('/cuenta', methods=['GET', 'POST'])
@login_required
def account():
    if request.method == 'POST':
        # Verificar si el formulario tiene un archivo de imagen
        if 'imagen' not in request.files:
            flash('No se seleccionó ninguna imagen.', category='error-archivo')
            return redirect(url_for('views.account'))

        imagen = request.files['imagen'] #Obtenemos la imagen enviada

        # Verificar si el archivo tiene un nombre válido
        if imagen.filename == '':
            return redirect(url_for('views.account'))

        # Verificar que el archivo sea una imagen válida
        if imagen and allowed_file(imagen.filename): #Allowed es una funcion que verifica si el nombre del archivo tiene unaa extension valida
            filename = secure_filename(imagen.filename)
            
            # Guardar el archivo en el servidor
            imagen.save(os.path.join(current_app.config['UPLOAD_FOLDER'], filename))
            
            # Actualizar la imagen en la base de datos
            current_user.image_file = filename
            db.session.commit()

        else:
            flash('Archivo no válido. Asegúrate de que sea una imagen (png, jpg, jpeg, gif).', category='error-archivo')

    return render_template('cuenta.html', user=current_user)


# Función para verificar si el archivo tiene una extensión permitida
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg', 'gif'} #Verifica que el archivo tenga un punto