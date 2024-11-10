from datetime import date
from .models import Category, Movie
from website import db



""" # Crear categorías
comedia = Category(name="Comedia", description="Películas cómicas y divertidas")
terror = Category(name="Terror", description="Películas de terror y miedo")
suspenso = Category(name="Suspenso", description="Películas de suspenso y misterio")
accion = Category(name="Acción", description="Películas de acción y aventura")
romanticas = Category(name="Románticas", description="Películas de amor y romance")
documental = Category(name="Documental", description="Películas documentales e informativas")

# Agregar categorías a la sesión y confirmar
db.session.add_all([comedia, terror, suspenso, accion, romanticas, documental])
db.session.commit()

# Consultar todas las categorías
categorias = Category.query.all()
for categoria in categorias:
    print(categoria.name, categoria.description)
 """



# Comedia
comedia = Category.query.filter_by(name="Comedia").first()
if comedia:
    peliculas_comedia = [
        Movie(title="Comedia 1", description="Descripción Comedia 1", release_date=date(2024, 1, 1), category_id=comedia.id, image_url="/static/img/e1.jpg", price=9.99, duration=90),
        Movie(title="Comedia 2", description="Descripción Comedia 2", release_date=date(2024, 2, 1), category_id=comedia.id, image_url="/static/img/e2.jpg", price=10.99, duration=95),
        Movie(title="Comedia 3", description="Descripción Comedia 3", release_date=date(2024, 3, 1), category_id=comedia.id, image_url="/static/img/e3.jpg", price=8.99, duration=85),
        Movie(title="Comedia 4", description="Descripción Comedia 4", release_date=date(2024, 4, 1), category_id=comedia.id, image_url="/static/img/e4.jpg", price=11.99, duration=100),
        Movie(title="Comedia 5", description="Descripción Comedia 5", release_date=date(2024, 5, 1), category_id=comedia.id, image_url="/static/img/e5.jpg", price=12.99, duration=110),
        Movie(title="Comedia 6", description="Descripción Comedia 6", release_date=date(2024, 1, 1), category_id=comedia.id, image_url="/static/img/e6.jpg", price=9.99, duration=90),
        Movie(title="Comedia 7", description="Descripción Comedia 7", release_date=date(2024, 2, 1), category_id=comedia.id, image_url="/static/img/e7.jpg", price=10.99, duration=95),
        Movie(title="Comedia 8", description="Descripción Comedia 8", release_date=date(2024, 3, 1), category_id=comedia.id, image_url="/static/img/joker.jpg", price=8.99, duration=85),
        Movie(title="Comedia 9", description="Descripción Comedia 9", release_date=date(2024, 4, 1), category_id=comedia.id, image_url="/static/img/leon.jpg", price=11.99, duration=100),
        Movie(title="Comedia 10", description="Descripción Comedia 10", release_date=date(2024, 5, 1), category_id=comedia.id, image_url="/static/img/mujer-gato.jpg", price=12.99, duration=110),
    ]
    db.session.add_all(peliculas_comedia)

# Terror
terror = Category.query.filter_by(name="Terror").first()
if terror:
    peliculas_terror = [
        Movie(title="Terror 1", description="Descripción Terror 1", release_date=date(2024, 1, 1), category_id=terror.id, image_url="/static/img/mujerangel.jpg", price=9.99, duration=120),
        Movie(title="Terror 2", description="Descripción Terror 2", release_date=date(2024, 2, 1), category_id=terror.id, image_url="/static/img/mujerfuego.jpg", price=10.99, duration=115),
        Movie(title="Terror 3", description="Descripción Terror 3", release_date=date(2024, 3, 1), category_id=terror.id, image_url="/static/img/mujerloba.jpg", price=8.99, duration=130),
        Movie(title="Terror 4", description="Descripción Terror 4", release_date=date(2024, 4, 1), category_id=terror.id, image_url="/static/img/pareja.jpg", price=11.99, duration=140),
        Movie(title="Terror 5", description="Descripción Terror 5", release_date=date(2024, 5, 1), category_id=terror.id, image_url="/static/img/ra1.jpg", price=12.99, duration=150),
        Movie(title="Terror 6", description="Descripción Terror 6", release_date=date(2024, 1, 1), category_id=terror.id, image_url="/static/img/ra2.jpg", price=9.99, duration=120),
        Movie(title="Terror 7", description="Descripción Terror 7", release_date=date(2024, 2, 1), category_id=terror.id, image_url="/static/img/ra3.jpg", price=10.99, duration=115),
        Movie(title="Terror 8", description="Descripción Terror 8", release_date=date(2024, 3, 1), category_id=terror.id, image_url="/static/img/ra4.jpg", price=8.99, duration=130),
        Movie(title="Terror 9", description="Descripción Terror 9", release_date=date(2024, 4, 1), category_id=terror.id, image_url="/static/img/ra5.jpg", price=11.99, duration=140),
        Movie(title="Terror 10", description="Descripción Terror 10", release_date=date(2024, 5, 1), category_id=terror.id, image_url="/static/img/ra6.jpg", price=12.99, duration=150),
    ]
    db.session.add_all(peliculas_terror)

# Suspenso
suspenso = Category.query.filter_by(name="Suspenso").first()
if suspenso:
    peliculas_suspenso = [
        Movie(title="Suspenso 1", description="Descripción Suspenso 1", release_date=date(2024, 1, 1), category_id=suspenso.id, image_url="/static/img/ra7.jpg", price=9.99, duration=110),
        Movie(title="Suspenso 2", description="Descripción Suspenso 2", release_date=date(2024, 2, 1), category_id=suspenso.id, image_url="/static/img/s1.jpg", price=10.99, duration=100),
        Movie(title="Suspenso 3", description="Descripción Suspenso 3", release_date=date(2024, 3, 1), category_id=suspenso.id, image_url="/static/img/s2.jpg", price=8.99, duration=95),
        Movie(title="Suspenso 4", description="Descripción Suspenso 4", release_date=date(2024, 4, 1), category_id=suspenso.id, image_url="/static/img/s3.jpg", price=11.99, duration=105),
        Movie(title="Suspenso 5", description="Descripción Suspenso 5", release_date=date(2024, 5, 1), category_id=suspenso.id, image_url="/static/img/s4.jpg", price=12.99, duration=120),
        Movie(title="Suspenso 6", description="Descripción Suspenso 6", release_date=date(2024, 1, 1), category_id=suspenso.id, image_url="/static/img/s5.jpg", price=9.99, duration=110),
        Movie(title="Suspenso 7", description="Descripción Suspenso 7", release_date=date(2024, 2, 1), category_id=suspenso.id, image_url="/static/img/s6.jpg", price=10.99, duration=100),
        Movie(title="Suspenso 8", description="Descripción Suspenso 8", release_date=date(2024, 3, 1), category_id=suspenso.id, image_url="/static/img/s7.jpg", price=8.99, duration=95),
        Movie(title="Suspenso 9", description="Descripción Suspenso 9", release_date=date(2024, 4, 1), category_id=suspenso.id, image_url="/static/img/vikingo.jpg", price=11.99, duration=105),
        Movie(title="Suspenso 10", description="Descripción Suspenso 10", release_date=date(2024, 5, 1), category_id=suspenso.id, image_url="/static/img/síderman.jpg", price=12.99, duration=120),
    ]
    db.session.add_all(peliculas_suspenso)

# Acción
accion = Category.query.filter_by(name="Acción").first()
if accion:
    peliculas_accion = [
        Movie(title="Acción 1", description="Descripción Acción 1", release_date=date(2024, 1, 1), category_id=accion.id, image_url="/static/img/e1.jpg", price=9.99, duration=130),
        Movie(title="Acción 2", description="Descripción Acción 2", release_date=date(2024, 2, 1), category_id=accion.id, image_url="/static/img/e2.jpg", price=10.99, duration=140),
        Movie(title="Acción 3", description="Descripción Acción 3", release_date=date(2024, 3, 1), category_id=accion.id, image_url="/static/img/e3.jpg", price=8.99, duration=150),
        Movie(title="Acción 4", description="Descripción Acción 4", release_date=date(2024, 4, 1), category_id=accion.id, image_url="/static/img/e4.jpg", price=11.99, duration=120),
        Movie(title="Acción 5", description="Descripción Acción 5", release_date=date(2024, 5, 1), category_id=accion.id, image_url="/static/img/e5.jpg", price=12.99, duration=135),
        Movie(title="Acción 6", description="Descripción Acción 6", release_date=date(2024, 1, 1), category_id=accion.id, image_url="/static/img/e6.jpg", price=9.99, duration=130),
        Movie(title="Acción 7", description="Descripción Acción 7", release_date=date(2024, 2, 1), category_id=accion.id, image_url="/static/img/e7.jpg", price=10.99, duration=140),
        Movie(title="Acción 8", description="Descripción Acción 8", release_date=date(2024, 3, 1), category_id=accion.id, image_url="/static/img/ra1.jpg", price=8.99, duration=150),
        Movie(title="Acción 9", description="Descripción Acción 9", release_date=date(2024, 4, 1), category_id=accion.id, image_url="/static/img/ra2.jpg", price=11.99, duration=120),
        Movie(title="Acción 10", description="Descripción Acción 10", release_date=date(2024, 5, 1), category_id=accion.id, image_url="/static/img/ra3.jpg", price=12.99, duration=135),
    ]
    db.session.add_all(peliculas_accion)



# Románticas
romanticas = Category.query.filter_by(name="Románticas").first()
if romanticas:
    peliculas_romanticas = [
        Movie(title="Romántica 1", description="Descripción Romántica 1", release_date=date(2024, 1, 1), category_id=romanticas.id, image_url="/static/img/ra4.jpg", price=8.99, duration=105),
        Movie(title="Romántica 2", description="Descripción Romántica 2", release_date=date(2024, 2, 1), category_id=romanticas.id, image_url="/static/img/ra5.jpg", price=9.99, duration=110),
        Movie(title="Romántica 3", description="Descripción Romántica 3", release_date=date(2024, 3, 1), category_id=romanticas.id, image_url="/static/img/ra6.jpg", price=7.99, duration=95),
        Movie(title="Romántica 4", description="Descripción Romántica 4", release_date=date(2024, 4, 1), category_id=romanticas.id, image_url="/static/img/ra7.jpg", price=10.99, duration=120),
        Movie(title="Romántica 5", description="Descripción Romántica 5", release_date=date(2024, 5, 1), category_id=romanticas.id, image_url="/static/img/s1.jpg", price=11.99, duration=130),
        Movie(title="Romántica 6", description="Descripción Romántica 6", release_date=date(2024, 1, 1), category_id=romanticas.id, image_url="/static/img/s2.jpg", price=8.99, duration=105),
        Movie(title="Romántica 7", description="Descripción Romántica 7", release_date=date(2024, 2, 1), category_id=romanticas.id, image_url="/static/img/s3.jpg", price=9.99, duration=110),
        Movie(title="Romántica 8", description="Descripción Romántica 8", release_date=date(2024, 3, 1), category_id=romanticas.id, image_url="/static/img/s4.jpg", price=7.99, duration=95),
        Movie(title="Romántica 9", description="Descripción Romántica 9", release_date=date(2024, 4, 1), category_id=romanticas.id, image_url="/static/img/s5.jpg", price=10.99, duration=120),
        Movie(title="Romántica 10", description="Descripción Romántica 10", release_date=date(2024, 5, 1), category_id=romanticas.id, image_url="/static/img/s6.jpg", price=11.99, duration=130),
    ]
    db.session.add_all(peliculas_romanticas)
    db.session.commit()