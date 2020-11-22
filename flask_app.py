
# A very simple Flask Hello World app for you to get started with...

from flask import Flask , render_template, request,session,redirect, send_from_directory

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def landing(path):
    return  render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)