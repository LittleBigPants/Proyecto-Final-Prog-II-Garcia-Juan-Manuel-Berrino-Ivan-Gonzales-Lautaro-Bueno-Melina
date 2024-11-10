from flask import Flask  # Para crear la aplicación web
from flask_sqlalchemy import SQLAlchemy  # Facilita la conexión y operación con la base de datos
from os import path
from flask_migrate import Migrate
from flask_login import LoginManager

db = SQLAlchemy()  # Creamos un objeto para interactuar con la base de datos
migrate = Migrate()
DB_NAME = 'flixfusion.db'  # Nombre de la base de datos

def create_app():
    app = Flask(__name__)  # Instancia de la aplicación Flask
    app.config['SECRET_KEY'] = 'proyecto-final'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'  # Configura la URI de la base de datos
    db.init_app(app)  # Inicializamos la base de datos
    migrate.init_app(app, db)

    # Registramos los blueprints para las vistas y la autenticación
    from .views import views
    from .auth import auth
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    # Mueve la importación de models después de que se inicializa la app
    from .models import User, Note, Category, Movie

    with app.app_context():
        create_database()

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    return app

def create_database():
    if not path.exists('website/' + DB_NAME):
        db.create_all()
        print('Created Database!')