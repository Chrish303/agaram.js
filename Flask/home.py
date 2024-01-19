from flask import Flask
from flask import render_template
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route("/") 

def new():
    return '<h1><marquee>Agaram Academy</marquee></h1>'
    
@app.route("/home")

def home():
    return '<h1>Chrish...</h1>'

@app.route("/user/<username>")

def users(username):
    return  'my name is'+username

@app.route("/login/<name>")
def login(name):
    return render_template("login.html",name=name)

@app.route("/list/<lists>")
def list(lists):
    namelist=["ajil",'sobith',"azim","vikash","barish"]
    return render_template("index.html",lists=namelist)  







