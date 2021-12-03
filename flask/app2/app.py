import os
from config import app
from post.index import post

app.register_blueprint(post)


if __name__ == '__main__':
    app.run(host=app.config['HOST'], port=app.config['PORT'], debug=app.config['DEBUG'])