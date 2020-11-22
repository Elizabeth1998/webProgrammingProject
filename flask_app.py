
# A very simple Flask Hello World app for you to get started with...

from flask import Flask , render_template, request,session,redirect, send_from_directory

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')
    
@app.route('/static/<path:path>')
def landing(path):
    return  send_from_directory('static',path)

if __name__ == '__main__':
    app.run(debug=True)