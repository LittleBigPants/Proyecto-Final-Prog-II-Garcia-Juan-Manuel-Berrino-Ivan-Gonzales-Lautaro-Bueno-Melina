from website import db  # Cambiado para importar db desde el paquete correcto
from flask_login import UserMixin  # Para la autenticación del usuario
from sqlalchemy.sql import func
from datetime import datetime

class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    image_file = db.Column(db.String(200), default='spiderman.jpg')
    notes = db.relationship('Note')

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    release_date = db.Column(db.Date)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    image_url = db.Column(db.String(255))  # Campo para la URL de la imagen
    price = db.Column(db.Float, nullable=False)  # Campo para el precio
    duration = db.Column(db.Integer, nullable=False)  # Campo para la duración en minutos
    video_url = db.Column(db.String(255), nullable=True)
    download_url = db.Column(db.String(255), nullable=True)
    category = db.relationship('Category', backref=db.backref('movies', lazy=True))



class Receipt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    total_price = db.Column(db.Float, nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)
    movie = db.relationship('Movie', backref=db.backref('receipts', lazy=True))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('receipts', lazy=True))