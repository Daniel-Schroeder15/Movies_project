# Final Project Outline - Team C


## Resources
- **Data Source:** Kaggle  
- **Datasets:**
  - datasets_2745_4700_movies  
  - MoviesOnStreamingPlatforms_updated  
  - tmdb_5000_movies

- **Software:**
  - Jupyter Notebook (anaconda python 3.7)  
  - PostgreSQL 11  
  - AWS S3 and RDS   
  - Tableau
  - Flask 
  - HTML5
  - JavaScript

## Presentation

- **Topic (and why):**  
The project topic is Movies. Watching movies has become one of the most common at-home activities during the pandemic, and people start to switch from going to movie theaters to using movie rentals and streaming services such as Netflix, Hulu, Disney+. However, it also makes people spend more time on finding the right movie. It will be great if we can have some aspects of the movies we should know before deciding what movie to watch. To help people save time on selecting movies, we will use machine learning techniques to analyze movie data based on different features and to predict movies the viewer may enjoy.  

- **Data Source Description:**  
We decide to use Kaggle as the data source for our project because it provides a vast container of open-access datasets for machine learning. We selected three movie-related datasets from Kaggle: datasets_2745_4700_movies, MoviesOnStreamingPlatforms_updated, and tmdb_5000_movies. We reviewed the datasets and merged them based on the important features for achieving the project goal. We selected the columns that are worth for machine learning, such as budget, gross, genres, production company, star, score, and streaming services, etc. Last, we cleaned the merged dataset and ended up with our raw dataset Merged_Movies_Raw_Dataset of 3188 rows and 24 columns.

- **Questions we hope to answer with data:**  
What aspects make a movie more watchable?  
Can the budget indicate a good movie?  
Are streaming services' movie library offering enough amount of watchable movies?
Can we recommend the viewer ten movies based on the movie entered by the viewer?
Could we predecit a score of a movie that is coming out, or not yet rated?

- **Description of the data exploration phase of the project:**
 Exploring each data set via Tableau and Machine Learning models to see relationships that could help us answer any of the above questions. The budget, revenue, genre, and streaming services all play a major role into understanding the data. Viewing the datasets individually allows us to understand the value of each dataset. 
 
 - **Description of the analysis phase of the project:**
 Analyzing the data with the merge datasets does not tell the full story. However, merging the data allows us to get the data necessary for the Machine Learning models. 

For more information, or to view the presentation draft, please look at our google slides. We have included several notes throughout the google slides.
https://docs.google.com/presentation/d/1WdAScHd122qWdyxKD_V411jTsfbOdzzzfuablZH-k5c/edit?usp=sharing


## Communication Protocols
The team will communicate through zoom, slack, and email. The team will meet twice a week outside of class Monday and Wednesday for 20 minutes at 7 pm via zoom to discuss progress and possible issues. Any additional time will be as needed during the weekend. 


## Machine Learning Model 

- **Preliminary data preprocessing:**
Before plugging the datasets into any of the machine learning models listed below, we had to do the following:
  - assure the database connection was secured and reliable.
  - Fix quality issues among the datasets (perform CRUD operations, drop null values and clean data)
  - Identify important features and high correlations to drop columns
  - Apply feature engineering libraries (encoding and machine learning dependencies)
 
 - **Preliminary selection and engineering:**
  
File: “KMeans_Movies: Finding if we can make a cluster classification using KMeans that helps to predict better the score movies. We also plan to use these clusters to assist in filtering movies for recommendation selection. 
 
File: “Logistic_Regression”: We are using Lasso and ElasticNet algorithms to train the model to get a better prediction of movie score. Currently the ElasticNet algorithm is a better predictor of score, but overall both models have difficulty accurately predicting score because of the limitation of our data. 
 
File: “Genre_recommendation”: Using TfidfVectorizer function from scikit-learn, which transforms text to feature vectors that can be used as input to estimator, we are using “genre” in this case to compute the cosine similarity matrix to calculate a numeric quantity that denotes the similarity between two movies using movies titles.

File: “PCA_Hierarchical_Clustering_Movies”: We tried PCA_Hierarchical_Clustering but the explained variance when 2 components were taken was only (0.075, 0.047).

- **Data Training and Testing split:**
SKLearn model selection train and test split method.

- **Model choice explained:**

The Natural Language Processing Model will be used because it allows to read the input of the user. This Machine Learning Model is being used because it can interpret the data input, and use set of statistical techniques identifying text. The techniques can be expressed as a model that is then applied to other text, also known as supervised machine learning. 

## Database Integration
-  **Connection details:**
AWS and PostgreSQL are connected with the AWS RDS and S3 buckets holding our datasets. The Connection is then used within the jupyter Notebook via SQLAlchemy. The primary utilization of the database will be for connecting our machine learning model results with our interactive website.

You can view the schema file in this repository's master branch labeled "schema.sql".

## Dashboard
- **Visualization Tools:**
Tableau Public: "Data2", "Movies", and "Streaming Services"
https://public.tableau.com/profile/daniel.schroeder#!/?newProfile=&activeTab=0

The visuals using tableau will be displayed on our google slides.
https://docs.google.com/presentation/d/1WdAScHd122qWdyxKD_V411jTsfbOdzzzfuablZH-k5c/edit?usp=sharing

- **Interactive Element:**
Creating a web application that will allow the user to select a movie based on genre. Once movie is selecet, the Machine Learning model's data will display the predicted score results.
Another option for the user with be to type a movie into web application, and the Natural Language Processing model with give the user the top 10 recommended movies based on the movie the user input. 







