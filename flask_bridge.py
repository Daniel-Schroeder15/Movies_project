# Import Dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from config import sql_pw

def get_popularities():
    # Create Database Engine and extract merged_Final_allDatasets_left_df from Database
    connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
    engine = create_engine(connection_string)
    interactive_df = pd.read_sql(sql="Interactive_ML_Movie_Data", con=engine)
    # create new column
    interactive_df["filter_pop"] = ""
    # create name for each class
    interactive_df.loc[(interactive_df['class'] == 0), "filter_pop"] = "Underrated"
    interactive_df.loc[(interactive_df['class'] == 1), "filter_pop"] = "Average Movie"
    interactive_df.loc[(interactive_df['class'] == 2), "filter_pop"] = "Blockbuster"
    # convert to list 
    popularity_list = interactive_df["filter_pop"].unique().tolist()
    return popularity_list

def Get_genres():
    # Create Database Engine and extract Dataset from Database
    connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
    engine = create_engine(connection_string)
    movies_df = pd.read_sql(sql="Interactive_ML_Movie_Data", con=engine)
    # Generate genre list
    genre_list = movies_df["genre"].unique().tolist()
    return genre_list

def Filter_movies(genre, popularity):
    # Create Database Engine and extract Dataset from Database
    connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
    engine = create_engine(connection_string)
    movies_df = pd.read_sql(sql="Interactive_ML_Movie_Data", con=engine)
    # If else statement for converting user input to class
    if popularity == "Underrated":
        pop = 0
    elif popularity == "Average Movie":
        pop = 1
    else: 
        pop = 2
    # Generate movie list
    filtered_movies = movies_df[movies_df["genre"] == genre]
    filtered_movies = filtered_movies[filtered_movies["class"] == pop]
    movie_list = filtered_movies["title"].unique().tolist()
    return movie_list    

# def recommendations(movie):

