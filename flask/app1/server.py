from flask import Flask

app = Flask(__name__)

# Rota API

@app.route("/")
def professores():
    return {
        'professores': [
            'alex',
            'marcia',
            'fabio'
        ]
    }

if __name__ == "__main__":
    app.run(debug=True)