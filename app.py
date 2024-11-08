""" from flask import Flask, render_template, request, url_for,redirect,jsonify, flash
app = Flask(__name__)

@app.route('/')
def bienvenido():
    return render_template('bienvenido.html')

@app.route('/iniciar_sesion', methods=['GET', 'POST'])
def iniciar_sesion():
    if request.method == 'POST':
        email = request.form['email']
        contraseña = request.form['contraseña']
        
        if email == "admin@example.com" and contraseña == "contraseña":
            return jsonify(success=True) #Esto envía una respuesta al cliente indicando que el inicio de sesión fue exitoso.
        return jsonify(success=False, message = 'Email o contraseña inválidos.')#{"success": false,
                                                                                # "message": "Email o contraseña inválidos."
                                                                                #}
                                                                                


    return render_template('iniciar_sesion.html')


@app.route('/registrarse', methods =['GET','POST'])
def registrarse():
    if request.method == 'POST':
        nombre = request.form['nombre']
        apellido = request.form['apellido']
        fecha_nacimiento = request.form['fecha_nacimiento']
        movil = request.form['movil']
        contraseña = request.form['contraseña']
        repetir_contraseña = request.form['repetir_contraseña']
    
        if not nombre or not apellido or not fecha_nacimiento or not movil or not contraseña:
            return jsonify(success=False, message="Todos los campos son obligatorios"), 400
        
        if contraseña != repetir_contraseña:
            return jsonify(success=False, message="Las contraseñas no coinciden"), 400
    
        return jsonify(success=True)
    return render_template('registrarse.html')

@app.route('/suscripcion')
def suscripcion():
    return render_template('suscripcion.html')

@app.route('/contenido')
def contenido():
    return render_template('contenido.html')

@app.route('/comprar_pelicula')
def comprar_pelicula():
    return render_template('comprar_pelicula.html')
        

if __name__ == '__main__':
    app.run(debug=True) """