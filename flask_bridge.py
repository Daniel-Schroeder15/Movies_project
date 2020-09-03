# Import Dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from config import sql_pw
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
# from wordcloud import WordCloud, STOPWORDS

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

# Function that get movie recommendations based on the cosine similarity score of movie genres
def recommendations(title):
    # Create Database Engine and extract Final_Movies_dataset table from Database
    connection_string = f"postgres://postgres:{sql_pw}@group-c-project-db.csna2pebfhlh.us-east-2.rds.amazonaws.com:5432/postgres"
    engine = create_engine(connection_string)
    movies_df = pd.read_sql(sql="interactive_nlp_movie_info_data", con=engine)
    # Use TfidfVectorizer function from scikit-learn, which transforms text to feature vectors that can be used as input to estimator
    tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
    tfidf_matrix = tf.fit_transform(movies_df['keywords_name'])
    # Use the Cosine Similarity to calculate a numeric quantity that denotes the similarity between two movies
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    # Write a function that returns the 20 most similar movies based on the cosine similarity score
    # Build a 1-dimensional array with movie titles
    titles = movies_df[['title','score','score_prediction','genre','Netflix','Hulu','Prime Video','Disney+']]
    indices = pd.Series(movies_df.index, index=movies_df['title'])
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    # Get the genre recommendations and sort by best score
    Top_Recommendations = titles.iloc[movie_indices]
    # FInd the genre of the input movie to be used as a filter to sort the recommendations
    genre_title_movie = movies_df[(movies_df.title == title)].genre.iloc[0]
    # Get the genre associate with the title_movie and sort by best score
    Top_Ten_Recommendations = Top_Recommendations[(Top_Recommendations.genre == genre_title_movie)].sort_values(by=['score'], ascending=False).head(10)
    return Top_Ten_Recommendations

# def wordcloud(movie):
#     # Create a wordcloud of the movie overview
#     Top_Ten_Recommendations['title'] = Top_Ten_Recommendations['title'].fillna("").astype('str')
#     title_corpus = ' '.join(Top_Ten_Recommendations['title'])
#     title_wordcloud = WordCloud(stopwords=STOPWORDS, background_color='black', height=2000, width=4000).generate(title_corpus)

#     # Plot the wordcloud
#     plt.figure(figsize=(16,8))
#     plt.imshow(title_wordcloud)
#     plt.axis('off')
#     plt.show()
