from flask import Blueprint, render_template

post = Blueprint('post', __name__)

@post.route('/', methods=['GET'])
def main():
    return render_template('post.html',
        title='Post',
    )