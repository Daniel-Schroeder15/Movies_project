# Import Dependencies
import pandas as pd
# import numpy as np
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler
# from sklearn.linear_model import ElasticNet
# from sklearn.linear_model import Lasso
# from sklearn.metrics import r2_score
from sqlalchemy import create_engine
# import matplotlib.pyplot as plt
from config import sql_pw

# # Create Database Engine and extract Dataset from Database
# connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
# engine = create_engine(connection_string)
# movies_df = pd.read_sql(sql="Movie_Data_Pre-Encoding", con=engine)
# data = movies_df.to_dict('records')
def Get_data():
    # Create Database Engine and extract Dataset from Database
    connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
    engine = create_engine(connection_string)
    movies_df = pd.read_sql(sql="Movie_Data_Pre-Encoding", con=engine)
    genre_list = movies_df["genre"].unique().tolist()
    # data = movies_df.to_dict('records')
    return genre_list