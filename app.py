# Import Dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from flask import Flask, render_template, redirect, jsonify
from config import sql_pw
from flask_bridge import Get_genres, Filter_movies
# from flask_bridge import ML_recommend, NLP_recommend

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

@app.route('/api/movies/<genre>/<movie>')
# @app.route('/api/ml/recommendation/<movie>')
# def recommend_ml_movies(movie):
#     recommend_movies_ML = ML_recommend(movie)
#     return jsonify(recommend_movies_ML)

# @app.route('/api/nlp/recommendation/<movie>')
# def recommend_nlp_movies(movie):
#     recommend_movies_NLP = NLP_recommend(movie)
#     return jsonify(recommend_movies_NLP)

# Running Flask App
if __name__ == "__main__":
    app.run(debug=True)