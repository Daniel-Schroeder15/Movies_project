# Import Dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from flask import Flask, render_template, redirect, jsonify
from config import sql_pw
from flask_bridge import Get_genres, Filter_movies, ML_recommend, NLP_recommend

# Create a New Flask App Instance
app = Flask(__name__)

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

# Create Flask Welcome Route
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/genres')
def data():
    data = Get_genres()
    return jsonify(data)

@app.route('/api/movies/<genre>')
def get_movies_by_genre(genre):
    filtered_movies = Filter_movies(genre)
    return jsonify(filtered_movies)

# @app.route('/api/data')
# def data():
#     data = Get_data()
#     return jsonify(data)

# @app.route('/user/<username>')
# def show_user_profile(username):
#     # show the user profile for that user
#     return 'User %s' % escape(username)

# Running Flask App
if __name__ == "__main__":
    app.run(debug=True)