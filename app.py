from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def bienvenido():
    return render_template('bienvenido.html')

@app.route('/iniciar_sesion')
def iniciar_sesion():
    return render_template('iniciar_sesion.html')

@app.route('/registrarse')
def registrarse():
    return render_template('registrarse.html')

@app.route('/suscripcion')
def suscripcion():
    return render_template('suscripcion.html')

@app.route('/contenido')
def contenido():
    return render_template('contenido.html')

if __name__ == '__main__':
    app.run(debug=True)