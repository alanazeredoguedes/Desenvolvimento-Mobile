from flask import Flask, request, jsonify, redirect, url_for, make_response, render_template

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        nome = request.form['nome']
        sobrenome = request.form['sobrenome']
        return render_template('home.html', nome=nome, sobrenome=sobrenome)

    return render_template('home.html')


@app.route('/redirected', methods=['GET'])
def redirected():
    return 'Redirected', 200


@app.route('/pessoa', methods=['POST'])
def pessoa():
    # print(request.args)
    # print(request.path)
    # print(request.headers.get('User-Agent')
    # print(request.headers)
    # print(request.get('pessoa')
    # print(request.form['pessoa'])

    pessoa = request.form['pessoa']
    return pessoa


@app.route('/response', methods=['GET', 'POST'])
def response_data():
    obj = {
        'username': 'admin',
        'password': 'admin',
        'token': 123456,
    }

    response = make_response(jsonify(data=obj), 201)
    response.headers['token'] = 'MeuToken'

    return response
    # return redirect(url_for('redirected'), 302)


@app.errorhandler(404)
def page_not_found(error):
    return 'Pagina Não Encontrada!', 404



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)