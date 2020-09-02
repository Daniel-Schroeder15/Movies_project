# Import Dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from flask import Flask, render_template, redirect, jsonify
from config import sql_pw
from flask_bridge import Get_popularities, Get_genres, Filter_movies
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

@app.route('/api/genres')
def genres():
    genres = Get_genres()
    return jsonify(genres)

@app.route('/api/popularities')
def popularities():
    popularities = Get_popularities()
    return jsonify(popularities)

@app.route('/api/<genre>/<popularity>')
def get_movies_by_inputs(genre, popularity):
    filtered_movies = Filter_movies(genre, popularity)
    return jsonify(filtered_movies)

# @app.route('/api/recommendation/<movie>')
# def recommend_movies(movie):
#     recommend_movies = recommendations(movie)
#     return jsonify(recommend_movies)

# Running Flask App
if __name__ == "__main__":
    app.run(debug=True)