
# A very simple Flask Hello World app for you to get started with...

from flask import Flask , render_template, request,session,redirect

app = Flask(__name__)

@app.route('/')
def landing():
    return  render_template("welcome.html")

@app.route('/user')
def choreList():
    return  render_template("landing.html")
