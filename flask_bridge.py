# Import Dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from config import sql_pw

# def Popularity_filter():

def Get_genres():
    # Create Database Engine and extract Dataset from Database
    connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
    engine = create_engine(connection_string)
    movies_df = pd.read_sql(sql="Movie_Data_Pre-Encoding", con=engine)
    # Generate genre list
    genre_list = movies_df["genre"].unique().tolist()
    return genre_list

def Filter_movies(genre):
    # Create Database Engine and extract Dataset from Database
    connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
    engine = create_engine(connection_string)
    movies_df = pd.read_sql(sql="Movie_Data_Pre-Encoding", con=engine)
    # Generate movie list
    filtered_movies = movies_df[movies_df["genre"] == genre]
    movie_list = filtered_movies["title"].unique().tolist()
    return movie_list    

# def ML_recommend(movie):


# def NLP_recommend(movie):

    