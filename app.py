# Import Dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from flask import Flask, render_template, redirect, jsonify
from config import sql_pw
# import Logistic_Regression
# import Final_Project_GroupC_DataClean
from flask_test import Get_data

# # Database Setup
# connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
# engine = create_engine(connection_string)
# movies_df = pd.read_sql(sql="Movie_Data_Pre-Encoding", con=engine)
# encoded_movies_df = pd.read_sql(sql="Movie_Data_Encoded", con=engine)

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
    # data = Get_data()
    # return render_template('index.html', json_list=json_list)
    # return render_template('index.html', data=data)
    return render_template('index.html')

@app.route('/genres')
def data():
    data = Get_data()
    return jsonify(data)

# @app.route('/api/movies/<genre>')
# def get_movies_by_genre(genre):
#     # do stuff
#     return jsonify(your_filtered_movie_data)

# @app.route('/api/data')
# def data():
#     data = Get_data()
#     return jsonify(data)

# @app.route('/user/<username>')
# def show_user_profile(username):
#     # show the user profile for that user
#     return 'User %s' % escape(username)

# # Flask Srapping Route
# @app.route("/scrape")
# def scrape():
#    mars = mongo.db.mars
#    mars_data = scraping.scrape_all()
#    mars.replace_one({}, mars_data, True)
#    return redirect("/")

# # Create Flask Results Route
# @app.route('/results')
# def results():
#     title = 'Result'
#     data = Logistic_Regression.movies_df #make function
#     return render_template('layouts/results.html',
#                            data=data)

# Running Flask App
if __name__ == "__main__":
    app.run(debug=True)