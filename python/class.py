class Video:
    def __init__(self, duracion, categoria, titulo, descripcion, calificacion, idioma):
        self.duracion = duracion
        self.categoria = categoria
        self.titulo = titulo
        self.descripcion = descripcion
        self.calificacion = calificacion
        self.idioma = idioma

    def reproducir(self):
        print(f'Reproduciendo {self.titulo}')

    def adelantar(self, minutos):
        print(f'Adelantando {self.titulo} por {minutos} minutos')

    def acelerar(self, factor):
        print(f'Acelerando {self.titulo} a {factor}x')

    def ver_detalle(self):
        print(f'Titulo: {self.titulo}, Categoria: {self.categoria}, Descripcion: {self.descripcion}, Calificacion: {self.calificacion}, Idioma: {self.idioma}')

    def pausar(self):
        print(f'{self.titulo} pausado')

    def calificar(self, nueva_calificacion):
        self.calificacion = nueva_calificacion
        print(f'Nueva calificacion de {self.titulo}: {self.calificacion}')

class Perfil:
    def __init__(self, nombre_usuario, preferencias, historial=None):
        self.nombre_usuario = nombre_usuario
        self.preferencias = preferencias
        self.historial = historial if historial is not None else []

    def ver_historial(self):
        for item in self.historial:
            print(item)

    def agregar_favorito(self, favorito):
        self.historial.append(favorito)
        print(f'{favorito} agregado a favoritos')

    def eliminar_favorito(self, favorito):
        if favorito in self.historial:
            self.historial.remove(favorito)
            print(f'{favorito} eliminado de favoritos')
        else:
            print(f'{favorito} no está en favoritos')

class Usuario:
    def __init__(self, nombre, email, contraseña, fecha_nacimiento, numero_telefono):
        self.nombre = nombre
        self.email = email
        self.contraseña = contraseña
        self.fecha_nacimiento = fecha_nacimiento
        self.numero_telefono = numero_telefono

    def registrarse(self):
        print(f'Usuario {self.nombre} registrado con email {self.email}')

    def iniciar_sesion(self):
        print(f'Usuario {self.nombre} ha iniciado sesión')

    def cerrar_sesion(self):
        print(f'Usuario {self.nombre} ha cerrado sesión')

    def actualizar_perfil(self, nuevo_nombre=None, nuevo_email=None, nuevo_numero_telefono=None):
        if nuevo_nombre:
            self.nombre = nuevo_nombre
        if nuevo_email:
            self.email = nuevo_email
        if nuevo_numero_telefono:
            self.numero_telefono = nuevo_numero_telefono
        print(f'Perfil actualizado: {self.nombre}, {self.email}, {self.numero_telefono}')

    def cambiar_contraseña(self, nueva_contraseña):
        self.contraseña = nueva_contraseña
        print('Contraseña actualizada')

    def eliminar_cuenta(self):
        print(f'Cuenta de {self.nombre} eliminada')



