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
Could we predict a score of a movie that is coming out, or not yet rated?

- **Description of the data exploration phase of the project:**
 Exploring each data set via Tableau and Machine Learning models to see relationships that could help us answer any of the above questions. The budget, revenue, genre, and streaming services all play a major role into understanding the data. Viewing the datasets individually allows us to understand the value of each dataset. 
 
 - **Description of the analysis phase of the project:**
 Analyzing the data with the merge datasets does not tell the full story. However, merging the data allows us to get the data necessary for the Machine Learning models. 

For more information, or to view the presentation draft, please look at our google slides. We have included several notes throughout the google slides.
https://docs.google.com/presentation/d/1WdAScHd122qWdyxKD_V411jTsfbOdzzzfuablZH-k5c/edit?usp=sharing


## Machine Learning Model 

- **Data preprocessing:**
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

- **Machine Learning Processing
- Logistic Regression Model
  - Output: Score
  - Input: Encoded data (company, directors, revenue language, writer, star, country, genre, rating), budget, title, votes, runtime, released year, popularity
  - **Data Training and Testing split:**
  - Test_size = 0.3, training_size = 0.7 (change size of training and test data from 0.7 to 0.8, and 0.7 and 0.3 give us the best score_prediction)
  - Generate score_prediction using Lasso Regression and ElasticNet Net Regression
  - Lasso: r2 = 0.365
  - ElasticNet: r2 = 0.41

- Kmeans Model
  - Based on questions we wanted to answer from datasets we drop revenue and budget to generate classes
  - Generate elbow curve.
  - Elbow curve shows 3 main clusters.
  - Add class to dataset.

- We added the classes from KMeans model and run the Logistic Regression Model to see if we can get better score prediction.
- Logistic Regression ElasticNet.
  - ElasticNet: r2 = 0.42.
  - Add score_prediction to dataset.

- TfidfVectorizer Model
  - Transform text to feature vectors to be used as input to estimator.
  - Use keywords_name to generate the matrix of numeric quantity that denotes the similarity between two movies based on keywords_name.
  - Generate a function that returns the most similar movies based on cosine similarity score (matrix).
  - Input a title movie and get the “Top Ten Movies Recommendation” based on similarity of the keywords_name of the title movie selected.
  - We added score, score_prediction, genre and class to the result.
  - Finally the code was added to the interactive web app to update results every time an user pick a movie to get the recommendation.


- **Model choice explained:**

- The Kmeans was used to find classes for the data.  We noticed the revenue and budget were a main driver of the classes.  Since we want to find a variable more meaningful to the user, we decided to use popularity, since it is a variable people look to decide to watch a movie.  We dropped the revenue and budget data from the dataset, and now the classes are driven by popularity.  We defined those classes like: Blockbuster, Average Movies and 
Underrated.

- The Natural Language Processing Model will be used because it allows to read the input of the user, in this case the title movie. The Machine Learning TfidfVectorizer Model Model takes the keywords_name and generate the similarity matrix for each movie, then the user input a movie and model predicts similar movies based on the keywords_name.  We finally filtered the results by genre and sort the results by score.  We also added the score prediction to the table presented to the user. 

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
The interative element ustilizes flask, html and javastript to produce a web application that allows the user to select a movie based on selected genre and machine learning clustering. Once movie is selected, the natrual language processing model runs generating a table of the top ten highest rated movies related to the selected movie. The table also displays the genre, score, predicted score results and what streaming service it is viewable on, if any.







